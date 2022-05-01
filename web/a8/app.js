// Setup and Vue things

Vue.component("ploty", {
	template: `
	
	<div class="ploty">
	</div>

	`
})


const canvasW = 990

// original version
const canvasH = 500

// // larger version
// const canvasH = 600


document.addEventListener("DOMContentLoaded", function(){
	
	// Create a new Vue 

	new Vue({
		template: `

		<div style="width: 100%" class="app">


			<h1>💡 &emsp; 💡 &emsp; 💡 &emsp; 💡 &emsp; 💡 &emsp; Broadway Box Office &emsp; 💡 &emsp; 💡 &emsp; 💡 &emsp; 💡 &emsp; 💡</h1>

			<div id="p5">
				
			</div>

		</div>`,
		el: "#app",
	
		computed: {

			// Slice of data
			broadSlice() {
				let slice = this.broad.slice(0, 1073)
				slice.sort((b0, b1) =>  compareDates(b0.rating, b1.rating))
				console.log(slice[0])
				return slice
			},

		},

		data() {
			return {

				broad: broadData
			}
		},

		mounted() {
			// When this compentent is mounted, also create a processing instance 

		let p = new p5((p) => {
			// Save the noise fxn
			noise = p.noise


			let mousePos = []
			// Basic P5 setup
			p.setup = () => {
				p.createCanvas(canvasW, canvasH)
				p.colorMode(p.HSL)
				p.ellipseMode(p.RADIUS)

				document.getElementById('distribution').innerHTML = `
				<div class="emoji-polaroid"
				</div>
				`

			}

			//-------------------------------------------
			// Mouse things

			p.mouseClicked = () => { 
				if (p.mouseX > 0 && p.mouseX < canvasW && p.mouseY > 0 && p.mouseY < canvasH) {
					console.log("X", p.mouseX)
					// console.log("Y", p.mouseY)
					// doing this actually saved my life holy shit
					// the tooltip-ish bit was so janky before I looked at the actual values like this
				}
				// figure out where we clicked
			}

			//-------------------------------------------
			// Draw

			p.draw = () => {

				p.background(255);

				// for original version
				p.line(20, 480, 980, 480) // x-axis
				p.line(980, 480, 975, 475)
				p.line(980, 480, 975, 485)
				p.line(20, 480, 20, 10) // y-axis
				p.line(20, 10, 15, 17)
				p.line(20, 10, 25, 17)

				// // for larger version
				// p.line(20, 580, 980, 580) // x-axis
				// p.line(980, 580, 975, 575)
				// p.line(980, 580, 975, 585)
				// p.line(20, 580, 20, 10) // y-axis
				// p.line(20, 10, 15, 17)
				// p.line(20, 10, 25, 17)

				p.fill(284, 29, 49)
				p.text("Time (years)", 500, 495)
				// p.rotate(180)
				// p.text("Avg Ticket Cost ($)", 1000, 300)
				// p.rotate(-180)
				p.text("A\nv\ng\n\nT\ni\nc\nk\ne\nt\n\nC\no\ns\nt\n\n($)", 7, 100)


				this.broadSlice.forEach((broad, index) => {

					// for the flashy flashy
					p.fill(Math.random()*300, 55, 49,0.5)

					// for original version
					p.text("✰",((broad.Year-1982)*26)-5,((-broad.Average_Paid_Ticket+310)*1.5)+5)

					// for larger version
					// p.text("✰",(broad.Year-1982)*26,(-broad.Average_Paid_Ticket+310)*1.5)
					// // p.circle((broad.Year-1982)*25,(-broad.Average_Paid_Ticket+310)*1.75,3)
					
					if (((broad.Year-1982)*26)-Math.random()-5<p.mouseX && ((broad.Year-1982)*26)+Math.random()+5>p.mouseX &&
						((-broad.Average_Paid_Ticket+310)*1.5)-Math.random()<p.mouseY && ((-broad.Average_Paid_Ticket+310)*1.5)+Math.random()>p.mouseY){
							
						document.getElementById('distribution').innerHTML = `
						<div class="emoji-polaroid">
							<p style="font-size:20px">${broad.Show_Name}</p>
							<p style="font-size:12px; text-align: left;">Week: ${broad.Week}</p>
							<p style="font-size:12px; text-align: left;">Avg Ticket Price: $${broad.Average_Paid_Ticket}</p>
							<p style="font-size:12px; text-align: left;">Top Ticket Price: $${broad.Top_Ticket_Price}</p>
							<p style="font-size:12px; text-align: left;">Seats Sold: ${broad.Seats_Sold}</p>
							<p style="font-size:12px; text-align: left;">Total Seats: ${broad.Total_Seats}</p>
						</div>
						`
					}

				})

			}
		}, document.getElementById("p5"))
			}
		}) 
})


function compareDates(d0, d1) {
	let d0Val = Date.parse(d0)
	let d1Val = Date.parse(d1)
	
	return d0Val - d1Val
}