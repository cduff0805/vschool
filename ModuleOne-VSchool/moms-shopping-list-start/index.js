const form = document["addItem"]

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const groceryItem = form.title.value
    form.title.value = ""
    const container = document.createElement("div")

     const li = document.createElement('li')
     li.textContent = groceryItem + ""
     container.append(li)

    const liButton1 = document.createElement('button')
    liButton1.innerHTML = "Edit"
    container.appendChild(liButton1)
    

    const liButton2 = document.createElement('button')
    liButton2.innerHTML = "X"
    container.appendChild(liButton2)

    document.getElementById("list").appendChild(container)

    liButton1.style.margin = "10px auto" 
    liButton2.style.margin = "10px auto" 
    liButton1.style.position = "relative" 
    liButton2.style.position = "relative"
    liButton1.style.bottom = "30px" 
    liButton2.style.bottom = "30px"
    liButton2.style.left = "100px"
    liButton1.style.left = "100px"

    liButton2.addEventListener("click", (e) => {
        container.remove()
    })


}) 


// function deleteItemA() {
//     document.getElementById("apples").innerHTML = ""
// }

// function deleteItemO() {
//     document.getElementById("oranges").innerHTML = ""
// }

// function deleteItemW() {
//     document.getElementById("watermelons").innerHTML = ""
// }

// function deleteItemA() {
    //         document.getElementById("apples").innerHTML = ""
    //     }

    //     document.getElementById("apples").addEventListener("click", deleteItemA(event))

//     function removeItem(e){
//         let addedItem = e.target.div
//         HTMLFormElement.target = addedItem
//         const listy = document.getElementById("list")
//         // let div = null
//         listy.remove(div)
// }  
// document.getElementById("list").addEventListener("click", removeItem)



//  document.addEventListener("click", deleteItem(event) {
//      var elem = document.getElementsByClassName("xButton")
//  })

//     for ( var i = 0; i < elem.length; i++ ) {
//         elem.textContent = ""
//     }
//  })

//   function deleteItem (e) {
//       var elem = document.getElementsByClassName("xButton")
//      elem.textContent = ""
//   }
// var elem = document.querySelectorAll(".xButton")
//   for (var i = 0; i < elem.length; i++) {
    
//     elem[i].addEventListener("click", function() {
//         var list = document.getElementsByTagName("li")
//         list.textContent = ""
//     }
  
// // }