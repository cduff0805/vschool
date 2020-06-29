const readline = require("readline-sync");
const name = readline.question("What is your name? ");

window.alert("You are stuck in a Room of Doom..In order to escape you have to find the key in the room and then open the door. If you put your hand in the hole..you die. Let's play.");


var choices = ["Stick hand in hole", "Find key", "Open Door"]

function myFunction() {
 alert("Which will you Choose to escape?")

}

function door() {
switch(choices) {
    case "Open Door":
        prompt("Did you find the key first?") {
            if (text === "yes") {
                alert("congrats! Head ot the door")
                
            } else if (text === "no"){
                alert("Keep searching for the key")
                
            }
        
        }
}
}


function key() {
    if (choices === "Find key") {
        alert("you found the key!")
        
    } else if {
        
    }

}


function hole() {

}