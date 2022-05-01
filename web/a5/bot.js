class ThoughtsOfDog {
	constructor() {
		this.thoughtsShared = 0
		this.coffeeAmount = 0
		this.maxCoffee = 10
		this.coffeeFlavor = "Folgers Instant"
		this.coffeeDescription = "boring coffee"

		this.grammar = tracery.createGrammar(dogGrammar)
		this.grammar.addModifiers(baseEngModifiers)
		console.log("A type of coffee:", this.grammar.flatten("#coffeeType#"))
	}

	respondTo(s) {
		console.log("User said", s)

		if(s.toLowerCase().includes("boop")) {
			return this.grammar.flatten("#boop#")
		}

		if(s.toLowerCase().includes("snack") || s.toLowerCase().includes("snacks") || s.toLowerCase().includes("treats") || s.toLowerCase().includes("treat")) {
			return this.grammar.flatten("#snack#")
		}

		if(s.toLowerCase().includes("thoughts") || s.toLowerCase().includes("thought") || s.toLowerCase().includes("think")) {
			return this.grammar.flatten("#thought#")
		}

		if(s.toLowerCase().includes("hi") || s.toLowerCase().includes("hello") || s.toLowerCase().includes("hey")) {
			return ("<img src='https://i.imgur.com/YwONkZN.gif' style='width:250px; height:auto;'></img>" + "hi there")
		}

		if(s.toLowerCase().includes("good") || s.toLowerCase().includes("boy") || s.toLowerCase().includes("girl")) {
			return ("<img src='https://i.pinimg.com/originals/b9/74/2f/b9742f72dab4f0de42e391eca9a23686.gif' style='width:250px; height:auto;'></img>" + "i am a good dog!")
		}

		if(s.toLowerCase().includes("baby") || s.toLowerCase().includes("bb") || s.toLowerCase().includes("sweetie") || s.toLowerCase().includes("cutie") || s.toLowerCase().includes("aww")) {
			return ("<img src='https://64.media.tumblr.com/b31a07332cd9447d73882fc30295c7d6/tumblr_mxjvxteNKG1sq0upuo1_r1_500.gif' style='width:250px; height:auto;'></img>" + "❤️")
		}

		else {
			// confused lol
			return this.grammar.flatten("#confused#")
		}
		// return "<img src='https://media.tenor.com/images/eff22afc2220e9df92a7aa2f53948f9f/tenor.gif'></img>"

		

		// if (s.toLowerCase().includes("drink")) {
		// 	if (this.coffeeAmount  == 0)
		// 		return "No coffee, brew more"
			
		// 	this.coffeeAmount -= 1
		// 	return this.grammar.flatten("The flavor is #flavor#")
		// }
		// if (s.toLowerCase().includes("you")) {
		// 	return "there is no I in tea"
			
		// }



		// // Brew new coffee
		// if (s.toLowerCase().includes("brew")) {

		// 	// Create new values
		// 	this.coffeeFlavor = this.grammar.flatten("#coffeeName#")
		// 	this.coffeeDescription = this.grammar.flatten("#coffeeDesc#")

		// 	this.post(`Brewing ${this.coffeeFlavor}, ${this.coffeeDescription}`)
					
		// 	let interval = setInterval(() => {
		// 		this.coffeeAmount = Math.min(this.coffeeAmount + 1,  this.maxCoffee)
		// 		if (this.coffeeAmount >= this.maxCoffee) {
		// 			this.post(`coffee is done!  *BING*`)
		// 			clearInterval(interval)
		// 		} else {
		// 			// console.log("post to chat")
		// 			this.post("... ")
		// 		}


				
		// 	}, 200)
			

		// 	return ""

		// }

		// if (s.includes(418))
		// 	return `I'm a coffee pot`

		// // return `'${s}' isn't a type of coffee`
		// return `OK....if you want. Brewing ${s} coffee`
	}
}