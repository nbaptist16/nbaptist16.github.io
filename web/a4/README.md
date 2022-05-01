Swarms! (Assignment 4)
===
aka rubie's tuesday
<br>
<br>

**Overview**

Create a particle swarm that reacts to the player's mouse cursor and each other. Have at least 3 kinds of particles with different motion. What global forces affect each one (winds, gravity) and do they affect each other? Are any of them connected to each other with springs? How do they react to the cursor?
<br>

<center>

![load view](https://github.com/nbaptist16/nbaptist16.github.io/blob/master/src/a4.gif?raw=true)

</center>

<hr>


**Features**

<code>Shuriken</code> <i>(particles-springs)</i>: Click and drag to move and "throw"

<center>

![shuriken view](https://github.com/nbaptist16/nbaptist16.github.io/blob/master/src/a4_shuriken.gif?raw=true)

</center>

Based on Professor Compton's spring particle code, these shuriken are held together by invisible springs; dragging one shuriken will pull the others along with it (the results can be seen in the green arrows). The spring and drag forces play a role in this system and can be adjusted with the appropriate sliders.

<small>note: there are some problems with toggling the debugger mode off for this one. I tried using an if(debugDraw) as in the examples, but it seems like it's got to do with how other code is structured. Hopefully will be fixed later :)</small>

<hr>

<code>Ducks</code> <i>(particles-basic)</i>: Move your mouse for your lil ducklings to follow

<center>


![duck view](https://github.com/nbaptist16/nbaptist16.github.io/blob/master/src/a4_ducks.gif?raw=true)

</center>

It's a lovely morning in the village, and you are a proud mama duck. Based on Professor Compton's basic particle code, these cute little ducklings will follow the user's cursor around the canvas as a group (how tightly knit they are is up to the user). Gravitational, drag, and mouseAttraction forces play a role in this system and can be adjusted with their respective sliders.

<hr>

<code>Dogs</code> <i>(particles-bugs)</i>: Sniff your way to victory with your trusty nose! (Click and drag to reposition)

<center>

![dog view](https://github.com/nbaptist16/nbaptist16.github.io/blob/master/src/a4_dogs.gif?raw=true)

</center>

These good boys track scents with their noses. They are specially oriented to follow a scent nose-first (although that means that sometimes they're upside down...but honestly, what dog doesn't spontaneously flip over every now and then?) When they find food (red), they get really excited and light up (the fill and line color swap)! Based on Professor Compton's bug particle (braitenberg) code, each dog is independently following his or her own trail, but can be moved by the user.

<hr>



**Acknowledgements**

Huuuuge shoutout to Professor Compton for providing us with such nice code!
Figuring this stuff out from scratch must've been a nightmare.

Fonts are all still taken from online!

And as always, all art is 100% done by yours truly :)

Fonts used: Shadows Into Light (Kimberly Geswein), Bebas Neue (Ryoichi Tsunekawa), and Lato (Łukasz Dziedzic)

And thank YOU for reading!