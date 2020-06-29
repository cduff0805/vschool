var box = document.getElementById("box")
document.addEventListener("mouseover", function() {
box.style.backgroundColor = "blue"
})

window.addEventListener("mousedown", function() {
box.style.backgroundColor = "red"
})

document.addEventListener("mouseup", function() {
box.style.backgroundColor = "yellow"
})

document.addEventListener("dblclick", function() {
box.style.backgroundColor = "green"
})

window.addEventListener("scroll", function() {
box.style.backgroundColor = "orange"
})


// function myFunction(event) {
//     var x = event.key;
  
//     // If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
//     if (x == "a" || x == "A") { 
//       alert ("You pressed the 'A' key!");
//     }
// }

// function keyCode() {
//     console.log("Bye")
//     var x = event.keyCode
//     if (x === 82) {
//         document.getElementById("box").style.backgroundColor = "red"
//     }
// }

window.addEventListener('keydown', function(event){
    if (event.key === "r") {
    box.style.backgroundColor = "red"
    } else if (event.key === "g") {
        box.style.backgroundColor = "green"
    } else if (event.key === "o") {
        box.style.backgroundColor = "orange"
    } else if (event.key === "b") {
        box.style.backgroundColor = "blue"
    } else if (event.key === "y") {
        box.style.backgroundColor = "yellow"
    }
})


// document.addEventListener('keypress', function(b){
//     document.getElementById("box").style.backgroundColor = "blue"
// })

// document.addEventListener('keypress', function(o){
//     document.getElementById("box").style.backgroundColor = "orange"
// })

// document.addEventListener('keypress', function(g){
//     document.getElementById("box").style.backgroundColor = "green"
// })


// document.addEventListener('keypress', function(y){
//     document.getElementById("box").style.backgroundColor = "yellow"
// })
// var box = event.which
// document.addEventListener("keydown", function(event) {
//     console.log(event.which);
//    })

//   document.addEventListener("keydown", function(event) {
//     document.getElementById("box").style.backgroundColor = "red"
//   })

//   document.addEventListener("g", function(event) {
//     document.getElementById("box").style.backgroundColor = "green"
//   })

//   document.addEventListener("keyup", function(event) {
//     document.getElementById("box").style.backgroundColor = "red"
//   })
