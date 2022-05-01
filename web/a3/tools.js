// Again, mostly from Professor Compton! Edited parts are noted below.
let positions = []
let drawCount = 0

// You may want to change these starting values
// let tool = {
// 	color0: [0,0,0],
// 	color1: [320,100,50],
// 	size: 1,
// 	mode: "pointer"
// }
let tool = {
	color0: [0,0,0],
	color1: [320,100,50],
	size: 1,
	mode: "curve"
	// please see curve.js for more information!
}

let lastMouse = [0,0]
let mouse = [0,0]

let tools = {

	// modified from pencil tool!
	brush(p, size, color0) {

		// Get mouse position
		mouse = [p.mouseX, p.mouseY]
		let mousePrevious = [p.pmouseX, p.pmouseY]

		p.noStroke()
		
		p.stroke(...color0)
		p.strokeWeight(size)
		p.line(...mouse, ...mousePrevious)

		p.fill(...color0)
	},

	// modiefied from brush tool modified from pencil tool!
	air_brush(p, size, color0) {

		// Get mouse position
		mouse = [p.mouseX, p.mouseY]
		let mousePrevious = [p.pmouseX, p.pmouseY]

		p.noStroke()
		p.noFill()

		p.stroke(...color0, 0.25)
		p.strokeWeight(size*5)
		p.line(...mouse, ...mousePrevious)

		// tried to offset the overlaping vertices between line segments with a white circle
		// only really works if you don't overlap though (ie: if you draw a single line) :,)
		p.stroke(100)
		p.circle(...mouse, size*0.01) //
	},

	// Also very much like the brush
	eraser(p, size) {
		
		// Get mouse position
		mouse = [p.mouseX, p.mouseY]
		let mousePrevious = [p.pmouseX, p.pmouseY]

		p.noStroke()
		
		p.stroke(100)
		p.strokeWeight(2*size)
		p.line(...mouse, ...mousePrevious)

		p.fill(1000)
	},

	// This thing is almost code-for-code the same as Professor Compton's, but I managed to somehow break it :)
	polygon(p, size, color0, color1) {
		//broken :(

		let mouse = new Vector()

		let emojiOptions = ["△","☐","☆","▭","▷","♢", "⊿", "⚡", "▱"]
		// let emojiOptions = ["KATE"]
		
		let index = Math.floor(emojiOptions.length*Math.random())
		let emoji = emojiOptions[index]
		
		let x = p.mouseX
		let y = p.mouseY

		x += 10*size*(Math.random() - .5)
		y += 10*size*(Math.random() - .5)

		p.textSize(Math.sqrt(size)*10)

		if (Math.random() < .5)
			p.text(emoji, x, y)
	}
}