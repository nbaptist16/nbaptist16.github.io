let animations = [
	

	// collection of independent animations
	
    // simple sine
	{
		skip:false,
		title: "simple sine wave",

		// draw has access to the processing object "p"
		draw: function(p) {
            let offset = 0
            let strum = 1

            let t = p.millis()*.001
            
            let start = 0
            for (start; start < 2; start++)
            {
                p.background(220);
                p.stroke(4)
                p.noFill()
                p.beginShape()
                let x = 0
                for(x = 0; x < p.width; x++){
                    //var angle = map(x, 0, width, 0, TWO_PI);
                    let angle = offset + x * 0.01
                    // map x between 0 and width to 0 and Two Pi
                    let y = p.map(Math.sin(angle), -strum, strum, 150, 250)
                    p.vertex(x, y)
                }
                p.endShape()
                offset += t
            }
            
		},
        description: "A single sine wave that took me an</br>embarrasingly long time to animate"
	},

    //simple wave shape, filled
	{
		skip:false,
		title: "simple ocean",

		// draw has access to the processing object "p"
		draw: function(p) {
            let offset = 3
            let strum = 1

            let t = p.millis()*.001
            
            let start = 0
            for (start; start < 2; start++)
            {
                p.background(220);
                p.stroke(4)
                p.fill('rgba(0,0,255, 0.25)')
                p.beginShape()
                p.vertex(0, p.height)
                let x = 0
                for(x = 0; x < p.width; x++){
                    //var angle = map(x, 0, width, 0, TWO_PI);
                    let angle = offset + x * 0.01
                    // map x between 0 and width to 0 and Two Pi
                    let y = p.map(Math.sin(angle), -strum, strum, 150, 250)
                    p.vertex(x, y)
                }
                p.vertex(p.width, p.height)
                p.vertex(0, p.width)
                p.endShape()
                offset += t
            }
            
		},
        description: "Transformed the simple sine wave into a</br>shape and filled it to create a nice wave"
	},

    // simple waves, layered
    {
		skip:false,
		title: "wave machine",

		// draw has access to the processing object "p"
        draw: function(p) {
        // originally had "draw: function(p, q)" to accommodate for layering, but instead used push/pop
            let offset = 0
            let strum = 1

            let offsetb = 1

            let t = p.millis()*.001
            
            p.background(220);
            let start = 0
            for (start; start < 2; start++)
            {
                p.stroke(4)
                p.fill('rgba(0,0,255, 0.25)')
                p.beginShape()
                p.vertex(0, p.height)

                let x = 0
                for(x = 0; x < p.width; x++){
                    //var angle = map(x, 0, width, 0, TWO_PI);
                    let angle = offset + x * 0.01
                    // map x between 0 and width to 0 and Two Pi
                    let y = p.map(Math.sin(angle), -strum, strum, 150, 250)
                    p.vertex(x, y)
                }
                p.vertex(p.width, p.height)
                p.vertex(0, p.width)
                p.endShape()
                offset += t
            }
            p.push()
            p.translate(0,100)
            
            offset = 1.5
            strum = 1

            t = p.millis()*.001
            
            start = 0
            for (start; start < 2; start++)
            {
                p.stroke(4)
                p.noFill()
                p.beginShape()
                p.vertex(0, p.height)

                x = 0
                for(x = 0; x < p.width; x++){
                    //var angle = map(x, 0, width, 0, TWO_PI);
                    angle = offset + x * 0.01
                    // map x between 0 and width to 0 and Two Pi
                    let y = p.map(Math.sin(angle), -strum, strum, 150, 250)
                    p.vertex(x, y)
                }
                p.vertex(p.width, p.height)
                p.vertex(0, p.width)
                p.fill('rgba(0,0,255, 0.25)')
                p.endShape()
                offset += t

                p.push()
                p.translate(5,0)
            }

            p.push()
            // p.translate(0,-100)
            p.translate(0,-100)
            
            offset = 1.5
            strum = 1

            t = p.millis()*.001
            
            start = 0
            for (start; start < 2; start++)
            {
                p.stroke(4)
                p.noFill()
                p.beginShape()
                p.vertex(0, p.height)

                x = 0
                for(x = 0; x < p.width; x++){
                    //var angle = map(x, 0, width, 0, TWO_PI);
                    angle = offset + x * 0.01
                    // map x between 0 and width to 0 and Two Pi
                    let y = p.map(Math.sin(angle), -strum, strum, 150, 250)
                    p.vertex(x, y)
                }
                p.vertex(p.width, p.height)
                p.vertex(0, p.width)
                p.fill('rgba(0,0,255, 0.25)')
                p.endShape()
                offset += t

                p.push()
                p.translate(5,0)
            }
            
		},
        description: "Layered and offset wave shapes to create a</br>relaxing wave machine simulation"
	},

    // jumpy ovals (eggs) and rectangles (bacon)
	{
		skip:false,
		title: "shakey shakey eggs and bakey",

		// draw has access to the processing object "p"
		draw: function(p) {
            let protein = []
            let i = 0
            let x = 100
            let y = 100
            let a = 100
            let b = 100
            let r1 = 50
            let r2 = 80
            let w = 50
            let h = 150

            p.background(220);

            for (i = 0; i < 10; i++)
            {
                x += p.random(-1, 1)
                y += p.random(-1, 1)
                a += p.random(-50, 50)
                b += p.random(-50, 50)
                r1 += p.random(-1, 1)
                r2 += p.random(-1, 1)
                w += p.random(-1, 1)
                h += p.random(-1, 1)

                if(p.random(1) < 0.5)
                {
                    protein[i] = p.ellipse(a, b, r1, r2)
                    // append(protein, p.ellipse(x, y, r1, r2))
                }
                else
                {
                    p.fill('rgb(186,82,30)')
                    protein[i] = p.rect(x, y, w, h)
                    p.fill('rgb(230,151,112)')
                    protein[i] = p.rect(x + 10, y, w/6, h)
                    protein[i] = p.rect(x + 35, y, w/6, h)
                    p.fill('rgb(255,241,222)')
                }
            }         
		},
        description: "Breakfast in America</br>(speaking of the 70s)* -->"
	},

    // good trip? 
	{
		skip:false,
		title: "Oh, the 70s",

		// draw has access to the processing object "p"
		draw: function(p) {
            p.background(220)
            
            let t = p.millis()*1000
            let bkg = 0
            let x = 0
            let y = 0
            let r = 1
            let i = 0
            let j = 0

			for (i = 0; i < 10; i++) {
				p.noStroke()
                // I'm sorry I'm just so much more used to rgb
                p.colorMode(p.RGB, 255, 255, 255, 1);
				p.fill(0, 0, 0, 0.2)
				bkg = (i/3) + 0.5
				p.ellipse(p.width/2, p.height/2, bkg*200, bkg*200)
			  }

			for(j = 0; j < 10; j++)
            {
                x = (p.width/2) + p.random(-100, 100)*j
                y = (p.height/2) + p.random(-100, 100)*j
                p.fill(p.random(0,1)*255, p.random(0,1)*255, p.random(0,1)*255, p.random(0,1)*1)
                p.circle(x, y, r*p.random(1,100))
                p.fill(p.random(0,1)*255, p.random(0,1)*255, p.random(0,1)*255, p.random(0,1)*1)
                p.circle(x*100, y*100, r*p.random(1,100))
                p.fill(p.random(0,1)*255, p.random(0,1)*255, p.random(0,1)*255, p.random(0,1)*1)
                p.circle(x*100, y*100, r*p.random(1,100))
                p.triangle()
            }
		},
        description: "Stare into the void and relive that chilling</br>sensation you once did when you first</br>watched the tunnel scene in willy wonka</br>and the chocolate factory"
	},

    // morphing shape
	{
		skip:false,
		title: "polymorph",

        // broken, so feel free to skip!
        // (from here https://p5js.org/examples/motion-morph.html)
        // left it on here so I could go back and fix it later

		// draw has access to the processing object "p"
		draw: function(p) {
            let circle = []
            let square = []
            let between = []

            let v1
            let v2

            let ang = 0
            let dist = 0
            let amt = 0
            let step = 0.01
            let x = 0
            let y = 0
            let i = 0

            let morph = false

            p.background(220);
            for (let angle = 0; angle < 360; angle += 9) {
                // Note we are not starting from 0 in order to match the
                // path of a circle.
                let v = p5.Vector.fromAngle(p.radians(angle - 135))
                v.mult(100)
                circle.push(v)
                // Let's fill out morph ArrayList with blank PVectors while we are at it
                between.push(p.createVector())
              }
            
              // A square is a bunch of vertices along straight lines
              // Top of square
              for (let x = -50; x < 50; x += 10) {
                square.push(p.createVector(x, -50))
              }
              // Right side
              for (let y = -50; y < 50; y += 10) {
                square.push(p.createVector(50, y))
              }
              // Bottom
              for (let x = 50; x > -50; x -= 10) {
                square.push(p.createVector(x, 50))
              }
              // Left side
              for (let y = 50; y > -50; y -= 10) {
                square.push(p.createVector(-50, y))
              }

            for(i = 0; i < square.length; i++)
            {
                if(morph)
                {
                    v1 = circle[i]
                }
                else
                {
                    v1 = square[i]
                }
                v2 = between[i]
                // v2.lerp(v1, 0.1)
                v2.lerp(v1, 0.1)
                // if (amt > 1 || amt < 0) {
                //     step *= -1;
                // }
                // amt += step;
                // v2 = p5.Vector.lerp(v1, v2, amt)
                let step = 0.01
                dist += p5.Vector.dist(v1, v2)
            }

            if(dist < 0.1)
            {
                morph = !morph
            }

            p.translate(p.width/2, p.height/2)
            p.stroke(100)
            p.beginShape()
            p.noFill()
            // p.stroke(255)
            p.stroke(4)

            between.forEach(v => {
                p.vertex(v.x*10, v.y*10)
            })
            // p.endShape(close)
            p.endShape()
		},
        description: "Mighty morphin' power ranger</br>broken :,("
	}
]