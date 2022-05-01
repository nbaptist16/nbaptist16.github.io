// Blatantly stolen from Professor Compton with some personal edits

curveCount = 4

function drawCurves(p) {
	p.stroke(4)
	// p.beginShape()// 
	curvePoints.forEach(pt => {
		// p.vertex(pt)
		drawPoint(p, pt)
	})
	// p.endShape()


	let t2 = p.millis()*.001%1

	// for (var i = 0; i < curvePoints.length; i++) {
	// 	let pt0 = curvePoints[i]
	// 	let pt1 = curvePoints[i + 1]
	// 	if (pt1 !== undefined) {

	// 		let pt2 = getLerp(pt0, pt1, t)
	// 		p.fill(0)
	// 		p.circle(...pt2, 20)
	// 	}
	// }

	// original Compton code here
// 	// // P = (1−t)3P1 + 3(1−t)2tP2 +3(1−t)t2P3 + t3P4
// 	// for (var j = 0; j < 20; j++) {
// 	// 	let t = (t2 + j *.05)%1

// 	// 	let b = [0,0]
// 	// 	let p1 = curvePoints[0]
// 	// 	let p2 = curvePoints[1]
// 	// 	let p3 = curvePoints[2]
// 	// 	let p4 = curvePoints[3]
// 	// 	for (var i = 0; i < 2; i++) {
// 	// 		b[i] = ((1 - t)**3)*p1[i] 
// 	// 			+ 3*(1- t)**2*t*p2[i]
// 	// 			+ 3*(1- t)* t**2 * p3[i]
// 	// 			+ t**3 * p4[i]
		

// 	// 	}
// 	// 		p.fill(150, 100, 50)
// 	// 		p.circle(...b, 10)
// 	// }

	// my edit :)
	p.stroke(4)
	let previndex = []
	p.beginShape()// 
	for (var j = 0; j < 20; j++) {
		let t = (t2 + j *.05)%1
		p.noFill()
		let b = [0,0]
		let c = []
		let p1 = curvePoints[0]
		let p2 = curvePoints[1]
		let p3 = curvePoints[2]
		let p4 = curvePoints[3]
		for (var i = 0; i < 2; i++) {
			b[i] = ((1 - t)**3)*p1[i] 
				+ 3*(1- t)**2*t*p2[i]
				+ 3*(1- t)* t**2 * p3[i]
				+ t**3 * p4[i]
			c[i] = ((1 - t)**3)*p1[i]  + 3*(1- t)**2*t*p2[i] + 3*(1- t)* t**2 * p3[i] + t**3 * p4[i]		

		}

		// I tried to make it a single line rather than epilepsy dots
		// but I can't for the life of me figure out how to separate the two endpoints
		p.strokeWeight(3)
		p.vertex(...b)
		p.endShape()
	}
}


function drawPoint(p, pt) {
	// made the little anchors into, well, anchors
	p.text('⚓', ...pt)
}