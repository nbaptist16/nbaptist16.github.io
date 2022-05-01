// Create a particle system with an initialize, update, and draw function

// let mySystem = new BasicParticleSystem()
// mySystem.update()
// mySystem.draw()

// class SpringyParticleSystem {
class Shuriken {
	constructor() {
		console.log("Make springy!")
		this.nodes = []
		this.edges = []

		let nodeCount = 10
		for (var i = 0; i < nodeCount; i++) {
			this.nodes.push(new SpringNode())
		}

		for (var i = 0; i < nodeCount*2; i++) {
			let n0 = this.nodes[i%nodeCount]
			let n1 = this.nodes[Math.floor(Math.random()*this.nodes.length)]
			if (n0 != n1) {
				this.edges.push(new SpringEdge(n0, n1))
			}
		}


	}

	getClosest(point, range) {
		let closestDist = range
		let closest = undefined

		this.nodes.forEach(b => {
			let d = Vector.getDistance(b.position, point)
			if (d < closestDist) {
				closest = b
				closestDist = d
			}
		})
		if (closest)
			return closest.position 
	}

	update(p) {
		// Reset the spring force on these nodes, it will get set by edges
		this.nodes.forEach(node => node.springForce.mult(0))
		this.edges.forEach(edge => edge.update(p))
		this.nodes.forEach(node => node.update(p))
		
	}

	draw(p) {
		this.nodes.forEach(node => node.draw(p))
		this.edges.forEach(edge => edge.draw(p))
	}
}

let nodeCount = 0
class SpringNode {
	constructor() {
		this.id = nodeCount++
		this.radius = Math.random()*30 + 10
		this.position = new Vector(Math.random()*canvasSize[0],Math.random()*canvasSize[1])
		this.velocity = new Vector(0,0)
		this.springForce = new Vector(0,0)
		this.force = new Vector(0,0)
	}

	update(p) {
		let dt = Math.min(.1, p.deltaTime*.001)
		let t = p.millis()*.001

		this.force.mult(0)

		// Borderforce 
		let borderStrength = .3
		this.force.addMultiples(this.position, -borderStrength, [p.width/2,p.height/2], borderStrength)

		// Wander
		this.force.addPolar(500*p.noise(this.id, .2*t)**2, 30*p.noise(this.id, .1*t))

		// // Add in the spring force
		this.force.addMultiples(this.springForce, (SLIDER.springForce+1)**3)


		this.velocity.addMultiples(this.force, dt)
		this.position.addMultiples(this.velocity, dt)

		this.velocity.mult(1 - .1*SLIDER.drag)

		// // // Ricochet
		// let s = 15

		// if (this.position[0] > p.width - s*1.001) {
		// 	// xdirection *= -1;
		// 	this.position[0] = this.position[0] - (this.position[0]*0.02)
		// 	this.velocity[0] = 0.0001
		// }
		// // if(this.position[0] < s*1.001) {
		// else if(this.position[0] < s*1.01) {
		// 	this.position[0] = this.position[0] + (this.position[0]*0.02)
		// 	this.velocity[0] = 0.0001
		// }

		// if (this.position[1] > p.height - s*1.001) {
		// 	// xdirection *= -1;
		// 	this.position[1] = this.position[1] - (this.position[1]*0.02)
		// 	this.velocity[1] = 0.0001
		// }
		// // if(this.position[1] < s*1.001) {
		// else if(this.position[1] < s*1.01) {
		// 	this.position[1] = this.position[1] + (this.position[1]*0.02)
		// 	this.velocity[1] = 0.0001
		// }

		// // Ricochet
		let s = 15

		if (this.position[0] > p.width - s*1.001) {
			// xdirection *= -1;
			this.position[0] = this.position[0] - (this.position[0]*0.02)
			this.velocity[0] = 0.0001
		}
		// if(this.position[0] < s*1.001) {
		else if(this.position[0] < s*1.01) {
			this.position[0] = this.position[0] + (this.position[0]*0.02)
			this.velocity[0] = 0.0001
		}

		if (this.position[1] > p.height - s*1.001) {
			// xdirection *= -1;
			this.position[1] = this.position[1] - (this.position[1]*0.02)
			this.velocity[1] = 0.0001
		}
		// if(this.position[1] < s*1.001) {
		else if(this.position[1] < s*1.01) {
			this.position[1] = this.position[1] + (this.position[1]*0.02)
			this.velocity[1] = 0.0001
		}


	}

	draw(p) {
		// let count = 5
		// let hue = (this.id*39)%360
		// for (var i = 0; i < count; i++) {
		// 	let pct = 1 - i/count
		// 	p.noStroke()
		// 	p.fill(hue, 100, (1 - pct)*100)


		// 	p.circle(this.position[0],this.position[1] + -.2*this.radius*(1 - pct)**.5, pct**.3*this.radius)
		// }

		let debugDraw = DEBUG_DRAW[this.constructor.name]
		// this.springForce.drawArrow({p, 
		// 	multiple:1,
		// 	center:this.position, 
		// 	color:[100,100,30]}) 
		// // this.force.drawArrow({p, 
		// // 	multiple:1,
		// // 	center:this.position, 
		// // 	color:[300,100,30]}) 
	
		// bookmark the matrix position before we move to draw this
		p.push()

		this.springForce.drawArrow({p, 
			multiple:1,
			center:this.position, 
			color:[100,100,30]}) 
		if(debugDraw) {
			this.springForce.drawArrow({p, 
				multiple:1,
				center:this.position, 
				color:[100,100,30]}) 
		}
		
		p.translate(...this.position)
		p.rotate(this.velocity.angle)

		// 
		
		// let duck = p.loadImage('itsaduckk.svg');

		// shuriken
		let s = 15
		p.stroke(0)
		p.fill("grey")
		p.beginShape()
		
		p.vertex((s/2), s)
		p.vertex(0, (s/2))
		p.vertex(-s, (s/2))
		p.vertex(-(s/2), 0)
		p.vertex((-s/2), -s)
		p.vertex(0, -(s/2))
		p.vertex(s, -(s/2))
		p.vertex((s/2), 0)

		p.endShape(p.CLOSE)

		p.fill("white")
		p.circle(0, 0, s/4)

		// p.image(duck, 0, 0);
		// return to the original drawing position

		p.pop()
	}

	debugDraw(p) {
		this.springForce.drawArrow({p, 
			multiple:1,
			center:this.position, 
			color:[100,100,30]}) 

		p.springForce.drawArrow({p, 
			multiple:1,
			center:this.position, 
			color:[100,100,30]}) 

		p.springForce.drawArrow({p, 
			multiple:1,
			center:p.position, 
			color:[100,100,30]}) 

		let forceDrawMultiple = .4
		this.springForce.drawArrow({
			p: p,
			center: this.position,
			multiple: forceDrawMultiple,
			color: [290,100,50]
		})
	}
}

class SpringEdge {
	constructor(n0, n1) {
		this.n0 = n0
		this.n1 = n1
		
		this.baseLength = 100
		this.stretch = 1
	}



	update(p) {
		let edgeVector = Vector.getDifference(this.n1.position, this.n0.position)
		let m = edgeVector.magnitude
		this.stretch = (this.baseLength - m)/m
		// console.log(edgeVector)
		if (m !== 0) {

			this.n0.springForce.addMultiples(edgeVector, this.stretch)
			this.n1.springForce.addMultiples(edgeVector, -this.stretch)
		}

		// constrains objects to each other
		this.n0.position.addMultiples(edgeVector, this.stretch*SLIDER.springEasing)
		this.n1.position.addMultiples(edgeVector, -this.stretch*SLIDER.springEasing)

	}



	draw(p) {
		p.stroke(150 + this.stretch*170, 100, 0 + 50*Math.abs(this.stretch))
		p.strokeWeight(3)

		// // draws lines between objects
		// Vector.drawLineBetween({p:p,
		// 	v0:this.n0.position,
		// 	v1:this.n1.position,
		// 	offsetStart:this.n0.radius/ + 2,
		// 	offsetEnd:this.n1.radius/2 + 2
		// })
	}
}
