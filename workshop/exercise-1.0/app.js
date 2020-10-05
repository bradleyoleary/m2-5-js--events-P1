// Exercise 1.0
// ------------
console.log('exercise-1');

//Target body with querySelector
let body = document.querySelector("body")
//Create function and new element
const bodyClick = () => {
    let p = document.createElement("p");
//Add text to new element
    p.innerText = "You Win!";
//Append child to parent node
    body.appendChild(p);
}

body.addEventListener("click", bodyClick)