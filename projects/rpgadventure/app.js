var readline = require("readline-sync");

var name = readline.question("Welcome young padawan, what is your name?");

console.log("Welcome " + name + ", this journey will test you in order to determine if you are ready to become a Jedi Knight.");
console.log("Select an option to begin")
var playerHealth = 100;
var isAlive = true;


var inventory = ["opium", "pipe for smoking opium", "magnifying glass"];

while(playerHealth > 0){
    var action = readline.keyInSelect(["Walk", "Check Inventory"], "What do you want to do? ")
    if(action === 0){
        isAlive = false;
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