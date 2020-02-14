var todo = document.querySelector(".todo");


//  array
var cart = ["TV", "GYM", "READ"];

//  looping
for (var i = 0; i < cart.length; i++) {
    todo.innerHTML += `<li> ${cart[i]} </li>`
}

cart.forEach()
