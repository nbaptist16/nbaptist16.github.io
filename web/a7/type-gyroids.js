class Gyroid {
    constructor(aof) {
        this.aof = aof
        this.center = new Vector(0, 0)
        this.width = 0
        this.markColor = new Vector(0, 0, 0)
        this.cuffColor = new Vector(0, 0, 0)
        this.mainColor = new Vector(0, 0, 0)
        this.height = 0
		this.eyes = 0
		this.mouth = 0
		this.antenna = 0
    }

    update(p, t, dt) {
        let mainColor = this.aof.get("mainColor")
		this.mainColor.setTo((300 * mainColor), 50, 50)

        let height = this.aof.get("height")
        this.height = 25 + height * 75

		let eyes = this.aof.get("eyes")
		this.eyes = eyes*1.25 + 1.25

		let mouth = this.aof.get("mouth")
		this.mouth = mouth*2

        let markColor = this.aof.get("markColor")
		this.markColor.setTo(300 * markColor, 80, 50)

        let cuffColor = this.aof.get("cuffColor")
		this.cuffColor.setTo(300 * cuffColor, 80, 50)

        let width = this.aof.get("width")
        this.width = 25 + width * 50

		let antenna = this.aof.get("antenna")
		this.antenna = antenna

    }

    draw(p) {
        p.push()

		// draw antenna
		p.fill(this.cuffColor)
		p.rect(-2,-(this.height)+(-this.antenna*44),4,(this.height*this.antenna)+(this.antenna*3))
		p.fill(this.markColor)
		p.circle(0,-(this.height)+(-this.antenna*48),this.width/10)

        // draw body
        p.fill(this.mainColor)
        let middle = this.width * (6 / 7);
        p.fill(this.mainColor)
		p.rect(-1 * (middle / 2), -1 * this.height, middle, this.height); //trunk

		let end = this.width * (8 / 7)
        p.fill(this.mainColor)
        p.rect(-1 * (end / 2), 0, end, this.width * (20 / 70), 3);

		// draw arms
		p.rect(-1*this.width*(1), -this.height/2, this.width*2, this.width * (20 / 70), 3);
		// left
		p.rect(-1*this.width*(1), (-this.height/2)+5, this.width * (20/70), -((this.width+this.height)/2)/3, 3);
		// right
		p.rect(this.width*(1)-(this.width * (20/70)), (-this.height/2)-5+(this.width * (2/7)), this.width * (20/70), ((this.width+this.height)/2)/3, 3);

		// draw cuffs
        p.fill(this.cuffColor)
		p.rect(-1*this.width*(1), (-this.height/2)+3-((((this.width+this.height)/3)/3)/2), this.width * (20/70), (-((this.width+this.height)/3)/3)/4, 3); //left1
		p.rect(this.width*(1)-(this.width * (20/70)), (-this.height/2)-3+(this.width * (2/7))+((((this.width+this.height)/3)/3)/2), this.width * (20/70), (((this.width+this.height)/3)/3)/4, 3); //right1
		p.fill(this.markColor)
		p.rect(-1*this.width*(1), (-this.height/2)-1-((((this.width+this.height)/3)/3)/2), this.width * (20/70), (-((this.width+this.height)/3)/3)/4, 3); //left2
		p.rect(this.width*(1)-(this.width * (20/70)), (-this.height/2)+1+(this.width * (2/7))+((((this.width+this.height)/3)/3)/2), this.width * (20/70), (((this.width+this.height)/3)/3)/4, 3); //right2

        // draw hat
        let lid = this.width * (4.5 / 7)
		p.fill(this.mainColor)
		p.triangle(-(this.width/2)-3,-this.height,(this.width/2)+3,-this.height,0,-this.height-(this.width/3))
		p.rect(-(this.width/2)-5,-this.height,(this.width)+10,5,3)
        p.fill(0, 0, 0, .75);

		// draw face
		p.fill(0,0,0)
		p.ellipse(-(this.width/3)+3,-this.height*0.75,3,this.eyes) // left eye
		p.ellipse((this.width/3)-3,-this.height*0.75,3,this.eyes) // right eye
		p.rect(-(this.width/8),-this.height*0.75+5,this.width/4,(this.height/3)+(this.mouth*3),this.mouth+1) // mouth

        p.pop()
    }

}

// Optional background: drawn once per population
Gyroid.drawBackground = function(p) {
	p.background(190, 80, 90)
}


Gyroid.landmarks = {
	"tall_bovoid": [1.00, 0.25, 0.23, 0.062, 0.4, 0.00,1.00,0.232],
	"mini_croakoid": [0.00, 0.148, 0.00, 0.072, 0.136, 0.00,1.00,0.148],
	"dingloid": [0.219, 0.184, 0.385, 0.477, 0.206, 0.686,1.00,0.435],
	"mega_drilloid": [0.443, 0.00, 1.00, 0.789, 0.009, 1.00,0.00,0.00],
	"fizzoid": [0.24, 0.061, 0.191, 0.325, 0.23, 0.00,1.00,0.191]
}
Gyroid.labels = ["height", "mainColor", "width", "markColor", "cuffColor", "eyes","mouth","antenna"]