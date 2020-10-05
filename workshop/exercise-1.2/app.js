// Exercise 1.2
// ------------
console.log('exercise 1.2');

const body = document.querySelector("body");
const result = document.getElementById("result");

let clicked = false;
const time = Math.floor(Math.random() * 3 + 2); //generates random number between 1 and 5s
document.getElementById("time").innerText = time;

//click function
const bodyClick = () => {
    clicked = true;
    result.innerText = "You win!";

    body.removeEventListener("click", bodyClick);
}

setTimeout(function()
{
  if (clicked != true) {
    result.innerText = "You lose!";

    body.removeEventListener("click", bodyClick);
  }

}, time * 1000);

body.addEventListener("click", bodyClick);