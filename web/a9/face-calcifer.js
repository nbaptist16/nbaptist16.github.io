masks.calciferFace = function(p) {

	let t = p.millis()*.001

	p.background(0, 0, 50, .5)

	let sideContours = face.sides.map(side => {
		return side.faceRings[0]
	})
	let faceContour = joinSides(...sideContours)

	let flare = 15*SLIDER.a + 1
	// Draw the background
	face.sideOrder.forEach(side => {
		side.eyeRings.forEach((ring, ringIndex) => {
			let ring2 = ring.map((pt, ptIndex) => {
				let lerpPct = 1*ringIndex + (ringIndex + flare)*noise(9*ptIndex + t)
			
				let pt1 = new Vector(0,0)
				pt1.setToLerp(side.eye, pt, lerpPct)

				return pt1
			})

			// here!
			let ring0 = side.eyeRings[4]
			let ring1 = side.eyeRings[1]
			let vOuter = new Vector(0,0)
			let cp0 = new Vector(0,0)
			let cp1 = new Vector(0,0)
			let cp0a = new Vector(0,0)
			let cp1a = new Vector(0,0)
			let dir = new Vector(0,0)
			let n = new Vector(0,0)
			let offset = new Vector(1,0)

			function drawFeather(index, pct) {
				let ft = t*.2
				p.strokeWeight(1)
	
				let v0 = ring0[index]
				let v1 = ring0[index + 3]
				let v2 = ring1[index + 2]
	
				let countr = 0
				for (var i = 5; i >= 1; i--) {
					countr += 1
					p.fill(15 + (SLIDER.a*5)*5*i + 10*Math.random(-20,20), 100, 50, 0.5)
					p.noStroke()

					// p.circle(faceContour[0][0] + 30*Math.random(-i*i*i,i*i*i), faceContour[0][1] + 225 - 50*countr + 100*Math.random(-20, 20), i*10)
					// This looks so janky, but my computer hates all these circles and hasn't spoken to me in 5 days
					p.circle(faceContour[0][0] + 30*SLIDER.b*Math.random(-i*i*i*SLIDER.b*10,i*i*i*SLIDER.b*10) - 75, faceContour[0][1] + 150 - 50*countr + SLIDER.b*2 + 100*Math.random(-20, 20), i*10)
					p.circle(faceContour[1][0] + 30*SLIDER.b*Math.random(-i*i*i*SLIDER.b*10,i*i*i*SLIDER.b*10) - 25, faceContour[1][1] + 175 - 60*countr + SLIDER.b*2 + 100*Math.random(-20, 20), i*10)
					p.circle(faceContour[2][0] + 30*SLIDER.b*Math.random(-i*i*i*SLIDER.b*10,i*i*i*SLIDER.b*10) + 25, faceContour[2][1] + 150 - 50*countr + SLIDER.b*2 + 100*Math.random(-20, 20), i*10)
					
					if(countr == 5)
					{
						countr = 0
					}

					// to keep face shape hidden
					p.fill(10 + i, 100, 50, 0)
				}
				
			
			}

			// draw bubbles
			// let featherCount = 6
			// for (var i = 1; i < 10; i++) {
			// 	for (var k = 0; k < featherCount; k++) {

			// 		let pct = 1 - k/featherCount
			// 		drawFeather(i, pct)
			// 	}
			// }
			drawFeather(1, 1)
		})
	})

	drawContour(p, faceContour, true)

	face.sideOrder.forEach(side => {
		
		
		
		// eyelashes?
		let ring0 = side.eyeRings[4]
		let ring1 = side.eyeRings[1]
		let vOuter = new Vector(0,0)
		let cp0 = new Vector(0,0)
		let cp1 = new Vector(0,0)
		let cp0a = new Vector(0,0)
		let cp1a = new Vector(0,0)
		let dir = new Vector(0,0)
		let n = new Vector(0,0)
		let offset = new Vector(1,0)

		// p.fill(0, 0, 100, .3)

		// p.circle(...side.eye, 4)
		// p.circle(...side.eye, 2)

		let eyeDir = new Vector()
		eyeDir.setToDifference(face.center, side.eye)
		// wobbly eyes
		// (noisy circle code from here: https://editor.p5js.org/natureofcode/sketches/8I_oLZqDt)
		p.stroke(0, 0, 0)
		p.fill(255, 255, 255, 0.75)
		// p.ellipse(...side.eye, 10, 10)
		let phase = 0;
		let zoff = 0;
		phase += 0.01;
		p.beginShape();
		for (let a = 0; a < 2*Math.PI; a += 0.02) {
			let xoff = p.map(Math.cos(a), -1, 1, 0, 2);
			let yoff = p.map(Math.sin(a), -t/2, t/2, 0, 2*t/2);
			const r = p.map(noise(xoff, yoff,zoff), 0, 1, 100, 250);
			let x = r * Math.cos(a);
			let y = r * Math.sin(a);
			// p.vertex(x, y);
			// p.vertex(x/5+side.eye[0], y/5+side.eye[1]);
			// face.sides[0].eye
			// p.vertex(x/5+side.eye[0]+(1.1*side.eye[0]), y/5+side.eye[1]);
			// p.vertex(x/5+(1.5*side.eye[0]), y/5+side.eye[1]);
			p.vertex(x/5+(1.5*side.eye[0]), y/(5/(SLIDER.c))+side.eye[1]);
		}
		p.endShape();

		p.fill(0,0,0)
		// p.circle(...side.eye, 10)
		// p.circle(side.eye[0]+(1.1*side.eye[0]), side.eye[1], 10)
		// p.circle((1.5*side.eye[0]), side.eye[1], 10)
		p.ellipse((1.5*side.eye[0]), side.eye[1], 10, 10*SLIDER.c)
	})

	// p.stroke(0, 0, 100, 1)
	// p.fill(0, 0, 0, .4)
	p.stroke(0, 0, 0, 1)
	// let hue = (10 + 10*noise(1*t + 4*pct))%360
	// p.fill(hue, 100, 30 + 60*noise(index + 1.2*t + 3*pct), .5)
	p.fill(10+(t-t*2), 50, 50, 1)
	// drawSmoothContour(p, face.mouth[4], true)
	drawSmoothContour(p, face.mouth[4], true)




	// added from face-nose.js

	hand.forEach((h,handIndex) => {


		h.fingers.forEach((finger,fingerIndex) => {
			// let fingerHue = (fingerIndex*20 + 150 + t*100) %360
			let fingerHue = (10 + 10*noise(1*t))%360
			p.fill(fingerHue, 100, 30, .5)
			// p.fill(fingerHue + 30, 100, 30, .5)

			// Leave a trail? Make an 8-point trail
			let trail = fingerTrails[handIndex][fingerIndex]
			if (!app.paused)
				addToTrail(trail, finger[3], 12)

			
			p.noStroke()
			p.fill(fingerHue + 20, 100, 70, .1)
			drawRibbon(p, trail, (pct, side) => {

				return 10*pct
			}, true)

			p.fill(35 + (SLIDER.a*5)*5 + 10*Math.random(-20,20), 100, 50, 0.09)
			// inspired by carlynsavino to make squishier shapes
			p.beginShape()
			p.noStroke()
			p.curveVertex(...h.wrist)
			h.fingers.forEach((finger, fingerIndex) => {
				
				drawRibbonVertices(p, finger, (pct, sideIndex) => {
					return 8*(1 + pct)*sideIndex
				}, true)

			})
			
			p.endShape()
		})
	})
}

function getFingerSize(fingerIndex, index) {
	let r = 1 + .3*Math.sin(1*fingerIndex - .5)
	// Make the thumb bigger
	if (fingerIndex == 0)
		r *= 1.6
	r *= 12
	// Taper the fingers a bit
	r *= (1 - .06*index)
	return r
}
