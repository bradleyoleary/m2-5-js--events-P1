// Exercise 1.1
// ------------
console.log('exercise 1.1');


//Target body with querySelector
let body = document.querySelector("body");

let clicked = false

const bodyClick = () => {
    clicked = true;
    winner();
}
//add in event
body.addEventListener("click", bodyClick);

setTimeout(function()
{
  if (clicked === true) {
    winner();
  }
  else {
    loser();
  }
}, 1000);

const loser = () => {
  document.getElementById("result").innerText = "You lose!";
};

const winner = () => {
  document.getElementById("result").innerText = "You win!";
};
