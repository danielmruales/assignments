var goomba = document.getElementById("goombas");
var bobomb = document.getElementById("bobombs");
var cheeps = document.getElementById("cheepcheeps");
var sum = document.getElementById("finalCoinTotal");

function totalCoins(e){
    e.preventDefault();
    sum.textContent = parseInt(goomba.value)*5 + parseInt(bobomb.value)*7 + parseInt(cheeps.value)*11;
    goomba.value = ""
    bobomb.value =""
    cheeps.value =""
}

document.baddies.addEventListener("submit", totalCoins);