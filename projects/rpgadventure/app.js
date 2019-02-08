var readline = require("readline-sync");

var name = readline.question("What is your name, good sir or madam? ");

console.log("Welcome " + name + ", you've been selected to hunt and kill monsters for the good of humanity and anyone willing to pay money.");

var playerHealth = 100;

var inventory = ["opium", "pipe for smoking opium", "magnifying glass"];

while(playerHealth > 0){
    var action = readline.keyInSelect(["Walk", "Check Inventory"], "What do you want to do? ")
    if(action === 0){
        walk()
    } else if(action === 1){
        checkInventory()
    }

}

function walk(){
    console.log("you're walking")
    if(Math.random() > .5){
        getAttacked();
    } else {
        // more code
    }
}

function getAttacked(){
    console.log("youve been attacked");
    if (wins){
        // more code
    }
}

function checkInventory(){
    console.log(inventory, playerHealth)
    // display inventory array and health
}