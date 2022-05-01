// let coffeeGrammar = {
// 	 "coffeeServing" : ["with a dollop of #cream#", "as a #cream# latte", "topped with #cream# foam", "black", "as a pourover", "clover-style", "French Press", "in a teacup", "in a moka pot", "in a teapot", "in a pile of discarded Keurig cups", "with #cream#"],
//     "coffeeServingInstruction" : ["Served #coffeeServing#", "Available #coffeeServing# or #coffeeServing#", "Try it #coffeeServing#", "Available #coffeeServing#"],
//     "coffeeType" : ["arabica", "decaf", "mocha", "grind", "espresso", "french roast", "dark roast", "light roast", "#flavorMod# roast", "extra #flavorMod# roast"],
    
//     "coffeeName" : ["#hpn# #coffeeType.capitalizeAll#", "#landscapeComplex.capitalizeAll# #coffeeType.capitalizeAll#", "#name#'s #coffeeType.capitalizeAll#"],
//     "coffeeDesc" : ["#flavorAttr.capitalize#.  #coffeeServingInstruction#.", "#flavorAttr.capitalize# and #flavorAttr#.  #coffeeServingInstruction#."],
//      "landscapeAdj" : ["rainy", "windy", "old", "grey", "dark", "creaky", "quiet", "silent", "fair", "shadow", "verdant", "sunny", "far", "near", "dry", "dead"],
//     "landscapeFeature" : ["river", "mountain", "forest", "mines", "pines", "falls", "glen", "garden", "mansion", "village", "isle", "bayou", "swamp", "hill", "creek", "rainforest", "desert"],
//     "landscapeComplex" : ["#landscapeAdj# #landscapeFeature#"],

//      "flavorAttr" : ["#hint.a# of #flavor#", "#texture# on your tongue", "#flavorMod# and #flavorMod# as #memory#", "it is #flavorMod# and #flavorMod# as #memory#", "#flavor#, #flavor#, and #flavor# #hint.s#", "#flavorMod# #flavor#, with #hint.s# of #flavor#", "#flavor# #blendsWith# #flavorMod# #flavor#", "#flavorMod# #flavor# #blendsWith# #flavorMod# #flavor#", "#flavorMod# #flavor#", "#flavorMod# #fruit.s#", "#hint.s# of #flavorMod# #flavor#", "#flavorMod# and #flavorMod#", "#flavorMod# #flavor# #hint.s#", "it smells of #memory#", "it reminds you of  #memory#", "you smell #memory#", "you remember #memory#", "you taste #memory#", "all you can taste is #memory#", "you #areDrowningIn# #flavorMod# #flavor#"],
//      "flavorMod" : ["special", "dark", "light", "bitter", "burnt", "savory", "flavorful", "aromatic", "fermented", "herbal", "pleasant", "harsh", "smoky", "sweet", "fresh", "refreshing", "somber", "bright", "perky", "sullen", "acidic", "sour", "peaty", "juicy", "perfumed", "buttery", "lush", "brisk", "strong", "weak", "tart", "tangy", "bold", "overpowering", "light", "faint", "subtle"],
//     "flavor" : ["spearmint", "tobacco", "agave", "coffee", "cocoa powder", "chocolate", "sea salt", "kosher salt", "brown sugar", "cinnamon", "motor oil", "lavender", "spice", "black pepper", "cardamom", "pumpkin spice", "caramel", "toffee", "butterscotch", "peppermint", "walnut", "acid", "pear", "citrus", "grenadine", "smoke", "iodine", "coriander", "cinnamon", "acid", "salt", "sugar", "maple", "coffee", "whiskey", "regret", "sorrow", "blood", "gasoline", "grass", "cigarettes", "pine", "tar", "saltwater", "rosewater", "jasmine", "espresso", "green apple", "#fruit#", "#fruit#", "#fruit#", "#fruit#", "#fruit#"],

// }

let dogGrammar = {
    "boop": [
        "<img src='https://i.giphy.com/media/SYLvjCEtBClsS2QePl/giphy.webp' style='width:250px; height:auto;'></img>",
        "<img src='https://i.kym-cdn.com/photos/images/original/001/990/252/bfa.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://media.tenor.com/images/3f364e971453b18a1ae2b5cc8d2d0613/tenor.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://thumbs.gfycat.com/AdeptImpoliteGlassfrog-max-1mb.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://thumbs.gfycat.com/CheapValuableAldabratortoise-max-1mb.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://thumbs.gfycat.com/AmusedAcidicAddax-size_restricted.gif' style='width:250px; height:auto;'></img>",
        "<img src='http://awesomeocean.com/wp-content/uploads/2015/02/wBfOn.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://www.gif-vif.com/Booped-wake.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKN1yZ-jOIO7Fnup3z-9e-ftM_20U4P-xnA&usqp=CAU' style='width:250px; height:auto;'></img>",
        "<img src='https://i.pinimg.com/originals/56/e2/f9/56e2f996d41f9fa19bc0db558da713eb.jpg' style='width:250px; height:auto;'></img>"
    ],
    "snack": [
        "#snackA#. #snackB#. #snackC#.",
        "#snackA#. #snackB#."
    ],
        "snackA": [
            "peanut butter pancakes",
            "i am feeling like",
            "i am craving",
            "tummy rumbles for",
            "tummy feels like",
            "i would like",
            "i tried to eat",
            "one of my goals. is to eat",
            "second breakfast",
            "second dinner",
            "eat",
            "must. eat",
            "got the grumblies for"
        ],
        "snackB": [
            "a snack",
            "the sand",
            "a flower",
            "some grass",
            "squirrel?",
            "sum treats",
            "cookie",
            "jerkey",
            "kibble",
            "steak",
            "farts",
            "sum ice",
            "apple",
            "some cheese",
            "the trash",
            "the rain",
            "peanut butter",
            "a leaf",
            "a treat",
            "a biscuit",
            "your homework"
        ],
        "snackC": [
            "for dinner",
            "for lunch",
            "for breakfast",
            "mmm..",
            "monch",
            "cromch",
            "hyek",
            "but my hooman said no",
            "but i am stuffed",
            "you can count on it",
            "pls",
            "pretty pls",
            "so quick. because am so hungry"
        ],
    "thought": [
        "#thoughtA#. #thoughtB#. #thoughtC#.",
        "#thoughtA#. #thoughtB#.",
        "#thoughtA#. #thoughtB#. #thoughtC#. #thoughtD#."
    ],
        "thoughtA": [
            "i",
            "i think",
            "hmm",
            "i like",
            "i really like",
            "we",
            "a nice belly rub",
            "scratching the itchy spot",
            "peanut butter",
            "goooob morning",
            "my human saw me",
            "my human disagrees that",
            "i was scolded",
            "because",
            "you say",
            "i say",
            "i want",
            "can i get"
        ],
        "thoughtB": [
            "happy thoughts",
            "good friends",
            "good company",
            "treats",
            "squirrels",
            "the silly neighbor"
        ],
        "thoughtC": [
            "it's confusing",
            "is funny",
            "maybe",
            "pls",
            "pretty pls",
            "if i am good. which i am"
        ],
        "thoughtD": [
            "it is very advanced",
            "i can smell it",
            "i can taste it",
            "that's the dream",
            "it just looked yummy",
            "i have no excuses",
            "huh",

        ],
    "confused": [
        "<img src='https://media.tenor.com/images/62238792a26f1957ee104fd17a54aaf8/tenor.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://media.tenor.com/images/fdc05dd7f127e6102955c1c62f1c9650/tenor.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://i.giphy.com/media/1irfi6MmcGGc751W16/giphy.webp' style='width:250px; height:auto;'></img>",
        "<img src='https://i.giphy.com/media/1gdie6tuheZwGlnfwj/giphy.webp' style='width:250px; height:auto;'></img>",
        "<img src='https://media.tenor.com/images/e9ed3510dc9eb1c0d8878c329d5ebdcb/tenor.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://i.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.webp' style='width:250px; height:auto;'></img>",
        "<img src='https://i.pinimg.com/originals/4b/12/a0/4b12a0a1a50aba5bf1afac6c32c20eeb.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://i.giphy.com/media/3jN3GziOKUEmI/giphy.webp' style='width:250px; height:auto;'></img>",
        "<img src='https://i.pinimg.com/originals/c4/61/4f/c4614f996ef29e531521912af69ef2d1.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://gifgifmagazine.com/wp-content/uploads/2018/10/zbunjeni-pas.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://i.giphy.com/media/yS2AMt4LX13Mc/giphy.webp' style='width:250px; height:auto;'></img>",
        "<img src='https://i.imgur.com/x9sonwo.gif' style='width:250px; height:auto;'></img>",
        "<img src='https://i.giphy.com/media/gIfv29q3ULtqjYTR7B/giphy.webp' style='width:250px; height:auto;'></img>",
        "<img src='https://media.tenor.com/images/cfd5c7b7dfdc5767be16634616224db4/tenor.gif' style='width:250px; height:auto;'></img>"
    ]
}