Simulation Template
===

# Creating Your Own Project?

If you're creating your own project, you should be able to get that project working by running the following commands:

- `git clone https://github.com/gregthompson27/simulation-template`
- `cd simulation-template`
- `rm -rf .git* .master`

Then create your own new github repo for this project

- `git clone <your_repo_link>`
- `mv README.md setup.sh <your_repo_name>`
- `cd <your_repo_name>`

After you've done all of that and updated instruction for the new activity you can push code up to github.
* Make sure to get rid of all the update statements in this readme
* Make sure to properly change all instances of 'taco-shop' to the name of your new repo in the .sh file

<<<UPDATE>>> DELETE THIS ENTIRE SECTION ABOVE AFTER CREATING YOUR PROJECT

<<<UPDATE>>> UPDATE THIS INTRO SENTENCE BELOW TO REFLECT THE NATURE OF THE SIMULATION ACTIVITY

Create an Ice Cream shop simulation activity from this repo, and customize your ice cream shop as you would like.

## Table of Contents
- [Overview](#overview)
- [Project Installation](#project-installation)
- [Coding Tips and Tricks](#coding-tips-and-tricks)
- [Project Steps](#project-steps)
    - [TODO 0 - Where to Code](#todo-0---where-to-code)
    - [TODO 1 - Add <<<BLANK>>>](#todo-1---add-<<<BLANK>>)
    - [TODO 2 - Add a Click Listener](#todo-2---add-a-click-listener)
    - [TODO 3 - Add Functionality to <<<BLANK>>>](#todo-3---add-functionality-to-<<<BLANK>>>)

## Overview

<<<UPDATE>>> UPDATE THE OVERVIEW TO MATCH THE ACTIVITY

In this simulation activity, you'll be be adding functionality to take an order at an ice cream shop you've started. (Or change it up and create a different themed food stand, like pizza or burgers!)

You'll start by expanding the menu a bit, but the main focus of this activity is adding functionality to calculate a customer's total when they order.

After you download this project, you'll have some basic code that will allow you to build out a simple ice cream shop.

## Project Installation

To install this project, you'll want to have your gitpod workspace open with the terminal running. Enter the following commands one at a time:

<<<UPDATE>>> UPDATE THE SCRIPTS TO MATCH THE NAME OF THE REPO

* `git clone https://github.com/gregthompson27/taco-shop.git`
* `chmod +x taco-shop/setup.sh`
* `./taco-shop/setup.sh`
* `rm -rf ./taco-shop/setup.sh`

<TODO> TODO: GREG - UPDATE THE .sh SCRIPT TO CONDITIONALLY ADD A SIMULATIONS FOLDER, AND MOVE THE PROJECT INTO THAT FOLDER

If you'd like to change the name of the project, you can right click on the folder name and select "Rename".

## Coding Tips and Tricks

### Gathering User Input

The `prompt` function is a built-in function in JavaScript that allows you to easily get user input. When the `prompt` function is called, a message box appears on the screen with the argument provided given as the message. The user can enter any value, which will then be returned by the function. You can use variables to record data like so:

``` js
var faveNumber = prompt('Enter your favorite number.');
```

It is important to note that ***the value returned by the `prompt` function will be a string no matter what the user types in***. There is a simple way to convert that value to a number if you're expecting the user to enter a number, and that is by using passing the entire prompt function as an argument to the built-in `Number` function, like so:

``` js
var faveNumber = Number(prompt('Enter your favorite number.'));
```

Another important note is that the user has the option to press 'Cancel' when the `prompt` function is called. If the user of your program does so, the value returned by the `prompt` function will be `null` (this is a value similar to undefined, and NOT a string).

### Giving Users Information

Most users aren't aware of the console and how it works, so we won't use many `console.log` statements in our code. We will use the built-in `alert` function instead. The alert function takes in a string as an argument and creates a pop-up message box with that string that the user can see. The `alert` function is not actually widely used in practice since it freezes up the browser, but it's a simple way for us to give our user some basic information if needed.

___

## Project Steps

### Todo 0 - Where to Code

The `index.html` file contains everything you'll need to get started. The `<body>` has a div with an id="menu" attribute that you can add additional menu items to if you'd like. The `<script>` tags that are part of the `<body>` are where you will add the code to make this app work.

___

<<<UPDATE>>> UPDATE THIS SECTION TO REFLECT, IF ANYTHING, SHOULD BE CUSTOMIZED FOR THIS SIMUL ACTIVITY

### Todo 1 - Add Menu Items

Find the div that is nested inside the `<main>` tags that has an id="menu" attribute. This div currently contains two nested child divs that each have class="menu-item" attributes.

Add some additional menu items to the menu. You can copy one of the class="menu-item" divs and paste it for each new item - just change the image urls and text for each new item you add.

___

### Todo 2 - Add an Event Listener

There are a couple pieces of code to add to make sure that the button is working and responding to being clicked. All of the code from here on will be added within the `<script>` tags that are at the bottom of the `<body>` element.

The first is called an event listener, which "attaches" a function call to an event (like clicking a button).

<<<UPDATE>>> UPDATE THIS PARAGRAPH TO REFLECT WHAT IS HAPPENING IN THE CODE (CHANGE THE FUNCTION NAMES)

Add the following line of code to your script, but change the name of the function to describe what happens when you click the button (you'll ask the user a series of questions about what they'd like to eat/order, then you'll give them a bill. A decent function name might be `takeOrder` or `calculateTotal`, but it's really up to you).

```js
$('button').on('click', functionName);
```

This line of code adds a listener to the button on the page, meaning that any time the button is clicked the designated function will be called. Below that event listener, you'll want to declare a function with the same name that you used in the previous line. We'll add the function's body in the next TODO.

For now, you can add a simple `alert` statement with a message, and then check if you're getting that alert pop-up whenever you click your button. This is a quick way to check that you've written your code correctly so far. 

___

### Todo 3 - Add Functionality to Calculate Cost

You're probably used to console logging information by now. This is a good practice to use to help debug your code and better understand how your programs are running. For this project, we'll be using two more built in functions that you've probably seen but not used much until now - `prompt` and `alert`. These functions allow us to get user input and also give users visible messages. 

The first thing you'll want to do is create a `total` variable in your function and assign it a value of `0`.

Next, we'll ask the user what they'd like to order, and then update the total based on the order. (We'll need to use the prompt function to get info from the user and then use conditional statements to correctly update the value of the `total` variable).

```js
var orderNumber = prompt('What combo number would you like to order?'); // NOTE: the value will be stored as a string

// Use conditional statements to update the value of the total
// Make sure to additional else if statements for any additional menu items you added in TODO 1
if (orderNumber === '1') {
    total += 6.99;
} else if (orderNumber === '2') {
    total += 9.99;
} else {
    alert('Sorry, you entered an incorrect combo number'); // Let's the user know that they incorrectly entered information
}
```

This is where you get to be creative! What other options would you like to give your customer? Do you want to see if they'd like chips and queso or chips and guac? Do you want to see if they'd like a drink? Do you want to give them different options for the type of meat they'll get in their tacos, and have some options cost extra? You'll want to write another `prompt` function, and then use the customer's input to adjust the total again. So something like this could work, but make some adjustments to that it works for you.

```js
var chipsAnd = prompt('Would you like chips and queso ($2.99) or chips and guac($3.99)? Type in "queso" for chips and queso, "guac" for chips and quac, or "no" if you want to limit your happiness and not get chips.'); // NOTE: the value will be stored as a string

// Use conditional statements to update the value of the total
// Make sure to additional else if statements for any additional menu items you added in TODO 1
if (chipsAnd === 'queso') {
    total += 2.99;
} else if (chipsAnd === 'guac') {
    total += 3.99;
} else if (chipsAnd === 'no') {
    total += 0;
} else {
    alert('Sorry, the information you entered was not correct'); // Let's the user know that they incorrectly entered information
}
```

Go ahead and create 2-3 more scenarios for your users, take their orders, and adjust their totals as necessary.

When your customer has finished their order, you'll want to let them know their order total. This is where we can use the `alert` function to notify users of information. The line of code at the end of your function will look something like this:

```js
alert('The total for your order is ' + total + '. We\'ll have it out shortly. Thanks for visiting the taco shop, and have a nice day!');
```

And there you have your very own virtual taco shop!