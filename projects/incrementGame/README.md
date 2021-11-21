## So you want to make an incremental game?

Great stuff! My advice is to dive straight in. You'll learn the most by doing, and the basics are pretty simple.

### Getting started

First things first, get the right tools.

    - Your Gitpod Workspace
    - Make sure you have Chrome or Firefox (ideally both). Get Firebug for Firefox if you haven't already.
    - You might want a server to put the files on eventually. If you don't have one yet don't worry, you can still write the game locally.
    - Then, open up the source code (Ctrl-U) of your favourite incremental game. Looking at the guts of someone else's game is how you'll learn the most (especially if they're good at commenting their code).

The first thing you'll notice is that the game is essentially a webpage, built from HTML, CSS, and JavaScript. These are the three tools you'll be using to create your game. You don't need to be an expert with all of them already - that's what we're here to build! But you might want to familiarise yourself with the basic principles of each before we get going, because I'm going to assume you know the basic conventions of the code.

I often recommend CodeAcademy to people just starting to learn. It's genuinely worth going through their introductory courses - they don't take too long and you'll learn some valuable skills that will make the rest of this much easier.

### Setting up your page
We're going to set up a webpage which we'll use for our game. First, you'll want to create three files in your workspace: 
    - index.html 
    - interface.css 
    - main.js.
These will hold the core of your game - the HTML, CSS and Javascript code for your program respectively. 

1. First, you will want to set up the skeleton of your HTML page 
    * give it html, head, and body tags as you normally would
    * Afrerwards, link the css stylesheet and the js file using
        <link rel="stylesheet" type="text/css" href="interface.css" />
        (at the top of the head tag element)
        <script type="text/javascript" src="main.js"></script>
        (at the bottom of the body tag element)

And you're good to go! You can now start adding code to any of the three files and then when you open the HTML file in a browser they will be linked (like how your previous projects where able to run.)

### TThe basics - clicking

Now for the meat of the game. Clicking on things. What you learn here will act as the basis for everything you learn later, so make sure you're following this carefully.

The basic mechanic for this is simple. You want to be able to click a button, and have a number on the screen increase. This requires a number of things.

An interface element (in our case a button) to click
Some game logic that keeps track of a number
A javascript function that the button can call to make the number go up
An interface element where the number can be displayed
A way to update that interface element
The button is simple enough. Add a button tag to your HTML. Now you have a button. You'll also want to add an onClick attribute to it - use something like
onClick="cookieClick(1)"
for that. This will be the function that's called when the button is clicked. Note that while we're using a button here, really you can use any element, including things like divs or spans.

Keeping track of a number is simple too. In the javascript file, define a variable (call it whatever you like) and set it to 0, something like
var cookies = 0;
You now need to tie these together by writing a function that makes the number go up. Functions are how you can make javascript execute a small piece of code. Each time the function is called, everything inside it will run. In our case, we want to take the variable we just defined and increase it. Add the cookieClick() function (or whatever you called it) to the javascript file. It should look like the below.

function cookieClick(number){
    cookies = cookies + number;
};
You can probably already see how this works - the cookieClick function is called by the button, passing the number 1 as the argument (the thing inside the brackets). The cookies variable is then incremented by that number we passed. You could make the number in the onClick whatever you wanted - for example, if you set it to -1 the number will actually go down by one every click!

The reason we pass our number to the function as an argument, is because later we might want to use numbers other than 1 (for example, if we add cursors to click for us). Inside the function we use number to stand for whatever we might want to pass into the function. This makes the function more flexible, and will save us work later on.

Next, we need a way to display the number. This is pretty simple - just add a span tag to your HTML, and give it a unique id (maybe something like id="cookies").

Finally, we want to get the number in the javascript into the HTML, and make sure it's updated each time the user clicks the button. We can achieve this by adding the following line on the second line of the cookieClick() function, just before the closing curly brace:

document.getElementById("cookies").innerHTML = cookies;
Substitute in the ID name and the variable name for whatever you chose. This line will search the HTML document for the specified ID and change the HTML inside it to whatever you want. In our case we are setting the HTML inside the span we made to be equal to the variable's value.

Now you've got the basics working! So far, we've learned how to let the user interact with the game, how to store a number in the game code, how to let the user increase it, and how to show the increased number to the user.

If you're having trouble at this stage, make sure you check your code very carefully. Javascript likes things written in a certain way - and the majority of what you learn and what causes bugs is to do with syntax (the way the code needs to be written for the browser to interpret it properly). Most of the other problems will be caused by spelling mistakes and copy/paste errors, so make sure you check those too.

numbers go up on their own
This next bit is a bit more tricky, but forms the basis for buying "buildings" or upgrades which cause the numbers to go up themselves. We've got two concepts to look at here - the first is adding buildings with a cost, and the second is what's known as the game loop.

To add a building (let's make it a cursor), you'll need interface elements for the user to interact with. Add a button to your HTML document, and add an onClick attribute to it, something like
onClick="buyCursor()"
This button will need a cost, so add some text after it to tell the user:

Cursors: <span id="cursors">0</span><br />
Cost: <span id="cursorCost">10</span>
Note that we've added in some spans with IDs. This is so we can update the numbers and cost later if necessary. We're going to use exponential cost increases here - the mathematical formula will be something along the lines of cost = 10 * 1.1^n where n is the number of cursors. This will increase slowly at the beginning but will pick up a lot later on.

Now we have to let the user buy the cursor - you'll first need to define the number of cursors that the user has:

var cursors = 0;
Then we need to add a function similar to this one:

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
Great! Now you should be able to buy cursors!

Make sure you look through this function to understand everything it's doing - first, the cost is calculated (Math.floor() rounds the cost down, so the user isn't paying fractional amounts of cookies). Then there is an if statement to test that the user has enough cookies to meet the cost, and then inside the if statement the relevant variables are changed and updated to the user. Afterwards the user is updated with the cost of the next cursor.

Your cursors still don't do anything yet - for that, we need the game loop.

the game loop
The game loop can be handled in a number of ways. We're going to want it to fire once per second, so we're going to set an interval (which is like a function that's called repeatedly). Add the following to the bottom of your js file:

window.setInterval(function(){

}, 1000);
This will fire everything inside the curly braces once every 1000ms (1 second). Here we can execute code, call functions, and do tests to see if conditions have been met.

Inside this, we want to add code to make the cursors click for us - one click per second per cursor. As it happens, we've already written a function that will handle this for us! No sense duplicating the work, so we'll call it from inside the interval function.

cookieClick(cursors);
Rather than passing a static number to the cookieClick function, we're passing the number of cursors - this means that if you have 0 cursors, nothing happens, but if you have seven, then you gain seven cookies per second. This is the reason why, when we originally wrote the function, we increased the number of cookies by the value of the number argument, rather than hard-coding it in. Note that if we wanted the cursor to add more per second, we could do some maths inside the brackets, say cursors * 10 if we wanted each cursor (or another building) to add ten per second.

what you should have so far
When you're done, you should have something that looks a little like this for index.html:

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="interface.css" />
	</head>
	<body>
		<button onclick="cookieClick(1)">Click Me!</button>
		<br />
		Cookies: <span id="cookies">0</span>
		<br />
		<button onclick="buyCursor()">Buy Cursor</button>
		<br />
		Cursors: <span id="cursors">0</span>
		<br />
		Cursor Cost: <span id="cursorCost">10</span>
		<script type="text/javascript" src="main.js"></script>
	</body>
</html>
And something like this for main.js:

var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);
test all the things!
Most of the work in building a game is in the testing. You want to test everything you can think of, try to find all the edge cases and bugs, and fix them. Then test some more to check you actually fixed the bugs and didn't introduce any more. Testing is by far and away the most important thing you can do.

A quick tip for testing when it comes to fiddling with variables, is to use console.log() to print to the console, where you can look at it in the browser. For example, if we added console.log(cookies) to our interval function, every second it would print the number of cookies to the console. Try it yourself!

developing your game
Now, obviously we haven't done any styling let. That's the first thing - you can make the game more pretty with judicious application of styles. One thing you might want to do sooner rather than later, is replace the buttons with div elements, and set the background images to something more interesting than a button. You can also move things around the screen by reordering the HTML, or using CSS. Experiment to find something that looks good to you.

You may want to tweak the balance of the game slightly to your preference. Make the game scale faster or slower by changing the power that the cost of buildings are raised to, or the base cost of the building. Maybe alter how many cookies you get from each item. At this point, you can fiddle around to your heart's content to get something that feels right to you.

You'll also want to add more buildings, and maybe upgrades or achievements. You'll want to add a save function by writing the game variables to a cookie (and reading them when the game loads) or using HTML5 local storage. Then there's the unique mechanics which make your game special. Each of these things can be added in one at a time as you learn how to write them/see how they're done elsewhere. Don't be afraid to add new things and make the game your own!

Followup tutorial: So You've Made An Incremental Game?

