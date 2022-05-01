

class BoujeeEstateInTheSimulation {
	// Some number of grids
	constructor(mode, dimensions, tileSize) {
		this.idNumber = simCount++
		// Mode can control various factors about the simulation
		this.dimensions = dimensions
		this.mode = mode
		this.tileSize = tileSize

		this.selectedCell = [3, 4]

		
		// Your simulation can have multiple layers, 
		// for example, it might have a 
		//  - a layer of sheep emoji, and a noise field of grass layers and a layer of wind vectors
		//  - a single layer of true/false for Game of Life
		
		this.willToLearn = createGrid(...dimensions)
		this.emoji = createGrid(...dimensions)
		this.showOffTendency = createGrid(...dimensions)
		this.teachesPeers = createGrid(...dimensions)

		// Set up the grid with its initial values
		this.initialize()
	}


	initialize() {
		console.log("init!")

		setGrid(this.willToLearn, (x,y) => {
			let startingWill = 0
			
			if (this.mode == "equalWillOnly"){
				startingWill = 50
				return startingWill
			}


			// Start with a weight to create random values weighted towards lower numbers
			let weightedDistribution = Math.random()
			if (weightedDistribution > 0.9) {
				// Return value between 90 and 100
				startingWill = Math.random() * (100 - 90) + 90
			}
			else {
				startingWill = Math.random() * (90 - 85) + 85
			}

			return startingWill
		})

		setGrid(this.showOffTendency, (x,y) => {
			if (this.mode == "showOffsOnly") {
				let chance = Math.random() * 7
				
				if (chance >= 3.5) {
					return true
				}
				else {
					return false
				}
			}

			if (this.mode == "noModifications") {
				return false
			}

			if (this.mode == "teachPeersOnly") {
				return false
			}

			let chance = Math.random() * 7
				
			if (chance >= 3.5) {
				return true
			}
			else {
				return false
			}
		})

		setGrid(this.teachesPeers, (x,y) => {
			if (this.mode == "teachPeersOnly") {
				let chance = Math.random() * 7
				
				if (chance >= 3.5) {
					return true
				}
				else {
					return false
				}
			}
			
			if (this.showOffTendency[x][y] == true) {
				return false
			}

			if (this.mode ==  "noModifications") {
				return false
			}

			let chance = Math.random() * 7
				
			if (chance >= 3.5) {
				return true
			}
			else {
				return false
			}
		})

		setGrid(this.emoji, (x,y) => {

			if (this.showOffTendency[x][y]) {
				return " "
			}
			if (this.teachesPeers[x][y]) {
				return "🏛"
			}
			else {
				return "🏡"
			}

				
		})
	}



	// When we update the simulation, 
	// we want write our next moves into a temporary "next-step" grid
	// And then once all the updates are done, 
	// copy that back into the original grid 

	step() {
		
		// Create a temporary grid to store the next positions
		let tempwillToLearnGrid = createGrid(...this.dimensions)
		
		// Move water downhill
		setGrid(tempwillToLearnGrid, (x,y) => {
			let cellWill = this.willToLearn[x][y]
			let avgWill = this.willToLearn[x][y]
			let neighbors = this.getAllNeighborPositions(x, y)

			let numShowOffNeighbors = 0
			let numTeachingNeighbors = 0
			
			if (this.teachesPeers[x][y] == true) {
				numTeachingNeighbors = 1
			}
			
			let changeInWill = 0
			
			// For each neighbor
			neighbors.forEach(n => {
				
				// Calculate avg will to learn around cells
				let nWill = this.willToLearn[n[0]][n[1]]
				avgWill += nWill

				//If neighbor "shows off", add to num show offs
				if (this.showOffTendency[n[0]][n[1]] == true) {
					numShowOffNeighbors += 1
				}

				//If neighbor helps to teach, add num to teaching peers
				if (this.teachesPeers[n[0]][n[1]] == true) {
					numTeachingNeighbors += 1
				}
			})

			// Calculate average will including self
			avgWill =  avgWill / (neighbors.length + 1)

			// Increase will to learn if individual will more than neighbors
			if (cellWill >= (avgWill)) {
				changeInWill += 0.5
			}
			else {
				// changeInWill -= 1
				changeInWill = changeInWill
			}

			// Subtract more from will if 3 or more neighbors "show off"
			if (numShowOffNeighbors > 2) {
				// changeInWill -= 4
				changeInWill = changeInWill
			}
			else {
				// changeInWill -= numShowOffNeighbors
				changeInWill = numShowOffNeighbors
			}

			// Add to will if neighbor is teaching
			changeInWill += numTeachingNeighbors * 3

			let updated_will = cellWill + changeInWill

			return updated_will
		})

		// Swap all the buffers: copy the nextGrid into the current grid
		copyGrid(this.willToLearn, tempwillToLearnGrid)
	}



	draw(p) {
		p.background(196, 100, 80)
		// Draw each cell
		let w = this.dimensions[0]
		let h = this.dimensions[1]

		for (var i = 0; i < w; i++) {
			for (var j = 0; j < h; j++) {
				this.drawCell(p, i, j)
			}
		}
		

		// Draw debug information about the currently selected cell
		// A useful place to put debug information!
		if (this.debugMode) {

			p.stroke(100, 100, 50, 1)
			p.strokeWeight(4)
			p.noFill()
			this.drawSquare(p, ...this.selectedCell)
			let neighbors = this.getNearestNeighborPositions(...this.selectedCell, true)
			neighbors.forEach((cell,index) => {
				p.noStroke()
				p.fill(index*20, 100, 50, .4)
				this.drawSquare(p, ...cell)
			})
			neighbors = this.getCornerNeighborPositions(...this.selectedCell, true)
			neighbors.forEach((cell,index) => {
				p.noStroke()
				p.fill(index*20 + 100, 100, 50, .4)
				this.drawSquare(p, ...cell)
			})

			// let count = this.getLiveNeighborCount(...this.selectedCell)
			// p.stroke(100)
			// p.fill(0)
			// p.text(count, this.selectedCell[0]*this.tileSize,this.selectedCell[1]*this.tileSize)
		}
	}

	

	// Draw a cell.  Add emoji or color it
	drawCell(p, x, y) {

		let h = this.willToLearn[x][y]
		let saturation = h/2
		p.noStroke()
		// p.fill(200, saturation, 60)
		p.fill(100, saturation, 60)
		this.drawSquare(p, x, y)


		let w = this.tileSize
		let px = (x + .5)*w
		let py = (y + .5)*w

		// let water = this.knowledge[x][y]
		// p.noStroke()
		// p.fill(199, 100, 50)
		// p.circle(px, py, w*water)

		

		p.textSize(w*.7)
		let object = this.emoji[x][y]
		p.text(object, px - w*.4, py + w*.3)

		// Write debug text
		if (this.debugMode) {
			p.textSize(10)
			p.fill(0)
			p.stroke(100)
			p.text(h.toFixed(2), px - w/2, py)
		}
	}

	//=====================================================
	// Mouse interactions

	select(x, y) {
		// console.log("Select", x, y)
		this.selectedCell = [x, y]
	}

	click(x, y) {
		console.log("Click", x, y)
		
	}

	drag(x, y) {
		this.values[x][y] = 1
	}



	//=====================================================
	// Utility functions

	toggleDebugInfo() {
		this.debugMode = !this.debugMode
	}

	// Handy utility to draw a single grid 
	drawSquare(p, col, row) {
		let w = this.tileSize
		let x = (col + .5)*w
		let y = (row + .5)*w
		p.rect(x - w/2, y - w/2, w, w)
	}

	// Handy utility to draw text 
	drawText(p, col, row, text) {
		let w = this.tileSize
		let x = (col + .5)*w
		let y = (row + .5)*w
		p.text(text, x - w/2, y - w*.1)
	}

	// Is this cell selected?
	isSelected(x, y) {
		return (this.selectedCell && this.selectedCell[0] == x && this.selectedCell[1] === y)
	}

	//------------------------------------------------
	// Neighbor positions
	getAllNeighborPositions(x1, y1, wrap=true) {
		return [...this.getNearestNeighborPositions(x1, y1, wrap),
		...this.getCornerNeighborPositions(x1, y1, wrap)]
	}

	getNearestNeighborPositions(x1, y1, wrap) {
		let w = this.dimensions[0]
		let h = this.dimensions[1]
		let x0 = x1 - 1
		let x2 = x1 + 1
		let y0 = y1 - 1
		let y2 = y1 + 1
		if (wrap)  {
			x0 = (x0 + w)%w
			x2 = (x2 + w)%w
			y0 = (y0 + h)%h
			y2 = (y2 + h)%h
		}
		
		return [[x1,y0],[x2,y1],[x1,y2],[x0,y1]]
	}
	getCornerNeighborPositions(x1, y1, wrap) {
		let w = this.dimensions[0]
		let h = this.dimensions[1]
		let x0 = x1 - 1
		let x2 = x1 + 1
		let y0 = y1 - 1
		let y2 = y1 + 1
		if (wrap)  {
			x0 = (x0 + w)%w
			x2 = (x2 + w)%w
			y0 = (y0 + h)%h
			y2 = (y2 + h)%h
		}
		
		return [[x0,y0],[x0,y2],[x2,y2],[x2,y0]]
	}


}