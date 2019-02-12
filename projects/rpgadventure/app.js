
//Introduction

var readline = require("readline-sync");

var playerInput = readline.question("\nWelcome young padawan, what is your name?");
console.log("\nWelcome " + playerInput + ", this journey will test you in order to determine if you are ready to become a Jedi Knight.");
console.log("Select an option to begin \n")
var isAlive = true;
var hasWon = false;

// Character Creation

var player = {
    name: playerInput,
    attack:  Math.floor(Math.random()*35)+11,
    hp: 150,
    inventory:  []
}

// var player = new Hero(playerInput)


// Ally Creation 

function Ally (name, hp){
    this.ally = name;
    this.hp = hp;
}
var obi = new Ally('Obi-wan', 75)
var yoda = new Ally('Master Yoda', 500)

var allies = [obi, yoda]

// Enemy Creation & Action

function Enemy (name, attack, hp, weapon){
    this.name = name;
    this.attack = attack;
    this.hp = hp;
    this.weapon = weapon;
}
var randomLow = Math.floor(Math.random()*10)+10;
var randomMedium = Math.floor(Math.random()*15)+20;

var darth = new Enemy("Darth Maul", randomLow, 150, "Double-sided Lightsaber");
var skywalker = new Enemy("Anakin", randomMedium, 225, "Force Choke");
var generalG = new Enemy("General Greciious", randomMedium, 100, "Blaster");

var enemies = [darth, skywalker, generalG]




//Functions 

function walk (){
    var random = Math.floor(Math.random()*20)
    if (random < 15){
        encounter();
    }else if(random === 1){
        allyEncounter();
    } else{
        console.log('\nYou passed some friendly civillians\n')
    }
}

function encounter (){
    var action = readline.keyIn("\nYou ran into a Sith!\nWould you like to [r] Run or [f] Fight?", {limit: 'rf'})
    if(action === 'r'){
        run()
    }else {
        var enemy = enemySelect()
        while(enemy.hp > 0 && player.hp > 0){
            fight(enemy)
        }
        if(enemy.hp <= 0){
            console.log("Well done " + playerInput + " you have defeated " + enemy.name)
            var newWeapon = enemy.weapon
            player.inventory.push(newWeapon)
        }else if(player.hp <= 0){
            console.log("\nYou have been defeated and proven yourself not worthy of becoming a Jedi Master")
    
            isAlive = false;
        }
    }
}

function fight (enemy){
    var random = Math.floor(Math.random()*5)
    if(random === 1){
        miss()
    }else {
        player.hp -= enemy.attack
        enemy.hp -= player.attack
        console.log(`${playerInput} your hp is now ${player.hp}`)
        console.log(`You attacked ${enemy.name}, their health is now ${enemy.hp}`)
    }
}

function enemySelect (){
    // console.log(enemies)
    var random = Math.floor(Math.random()*3)
    return enemies[random]
}

function miss (){
    console.log('you missed dawg')
}

function quitGame(){
    console.log("\nYou have decided to abandon your quest, may the force be with you.\n")
    isAlive = false;    
}

function allySelect(){
    var random = Math.floor(Math.random()*allies);
    return allies[random]
}

function allyEncounter(){
    var action = readline.keyIn("You found an Ally! He is here to help you.\n What would you like to do? [T] Talk [R] Run away", {limit: 'tr'})
    if(action === 'r'){
        run();
    } else if( action === 't'){
       allySelect()
    }
}
 function print(){
    console.log(player.hp)
    console.log(player.inventory)
    console.log(playerInput)
 }

 function run(){
     var random = Math.floor(Math.random()*2);
     if(random === 1){
        console.log("\nOh no!")
        encounter();
        //I want them to run into an ally or an enemy
     } else{
         console.log("\nNothing happened, select an option below\n")
     }
 }

 while(isAlive && !hasWon){
    var action = readline.keyIn("\nWhat would you like to do? [w] Walk, [p] Print Inventory, [q] Quit Game ", {limit: 'wpq'})
    if(action === 'w'){
        walk();
    } else if(action === 'q'){
        quitGame();
    } else if(action === 'p'){
        print();
    }
}