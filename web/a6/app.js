	
let simCount = 0

let noise = (new p5()).noise

document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el : "#app",
		template: `<div id="app">
			<p style="width: 85%; margin: 20px auto;">
				Of course, the most obvious contributor to Hawai‘i’s skyrocketing housing prices is its growing population. While many move to the Aloha State to settle down, there are the unfortunate few looking for a fresh start. To those arriving for the first time, the average expenses come as quite a shock. The below simulation illustrates the rapid urbanization of the island of O‘ahu as the state’s populations grows, increasing the cost of living.
			</p>
			<simulation type="IslandInTheSimulation" mode="avengersAssemble" :dimensions="[25,20]" :tileSize="20"/>

			<p style="width: 85%; margin: 20px auto;">
				A simple response to the housing demand is the near-constant construction and renovation around the state. However, an increase in residences means nothing if they are not affordable. Luxury apartment and vacation home projects, though increasingly common, are frequently left vacant and are often only possible due to wealthier visitors and to-be residents outbidding the local population. Such developments might contribute the local economy, but they also increase the cost of living and, consequently,  the burden on many long-time, mid- and lower-income residents. This second simulation is a visualization of property value increase (tile brightness) over time thoughout both average (🏡) and fancy (🏛) neighborhoods.
			</p>
			<simulation type="BoujeeEstateInTheSimulation" mode="sheeeeeeeesh" :dimensions="[25,20]" :tileSize="20"/>
			
			<p style="width: 85%; margin: 20px auto;">
				Despite promises of affordable housing, many projects categorized as such are still rather pricy. However, if such residences become available to those putting in everything they’ve got, it could at least be a step in the right direction. This final simulation shows how purposely designating space for more reasonably affordable, non-vacation-home-ey properties (🏗 because our state takes forever to construct stuff, so this is what it'll look like for at least 5 years) to diversify the market, while it would help to balance out property costs, would not necessarily classify such properties in a specific "price range".
			</p>
			<p style="width: 85%; margin: 20px auto;">
				Idek. Real estate stuff.
			</p>
			<simulation type="StudentHousingInTheSimulation" mode="they'reAllGoodNeighborhoodsIPromise" :dimensions="[25,20]" :tileSize="20"/>
		</div>`,
		
	}) 
})



//==================================
// Grid utilities

// Create a grid of columns
function createGrid(w, h) {
	const grid = Array.from(new Array(w),()=>Array.from(new Array(h),()=>"-"));
	// const grid = Array.from(new Array(h),()=>Array.from(new Array(w),()=>"-"));
	return grid
}

// Set a grid equal to a function
function setGrid(grid, fxn) {
	if (grid === undefined)
		console.warn("no grid!")
	if (fxn === undefined)
		console.warn("no function for setting the grid!")
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			grid[i][j] = fxn(i,j)
		}
	}
}

// Copy a grid
function copyGrid(dest, src) {
	for (var i = 0; i < src.length; i++) {
		for (var j = 0; j < src[i].length; j++) {
			dest[i][j] = src[i][j]
		}
	}
}
