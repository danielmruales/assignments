var ask = require("readline-sync");
// var name = readline.question("What is thou name sire? ");

var isAlive = true;
var hasKey = false;


while(isAlive){
    var index = ask.keyInSelect(["Put hand in hole", "Find the key", "Open the door"], "Choose Wisely...")
    if(index === 0){
        console.log("Wasted")
        isAlive = false
    }
    if (index === 1){
        console.log("You found the Key")
        if(hasKey){
            console.log("No key here");
        } else{
            console.log("You found the key!");
        }
    }




}

//     // write if statement for the find the key option
//         // consider a nested if asking if they've already found the key

//     // write an if statement for the open the door option
//         // consider a nested if asking if they've found the key

// }


