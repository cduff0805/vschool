var header = document.getElementById("header")
header.textContent = "Javascript Made This!"
header.style.textAlign = "center"
header.style.font = "bold"
header.style.fontSize = "25px"

var nameOne = document.getElementById("name")
nameOne.style.color = "orange"

var div1 = document.getElementById("divOne")
div1.style.textAlign = "center"


function clearInput() {
    document.getElementById("myDiv").innerHTML = ""
    
 }


 function changeText() {
    document.querySelector("#myDiv .left").firstChild.nodeValue = "Hello Britney Spears"
    document.querySelector("#myDiv .right").firstChild.nodeValue = "oops..you did it again"
    document.querySelector("#message3").textContent = "No I didn't!"
    document.querySelector("#message4").textContent = "Yes you did girllll"
 }