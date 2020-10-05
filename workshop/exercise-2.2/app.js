let main = document.getElementById("main");
main.style.flex = "flex";
main.style.justifyContent = "center";
//Create for loop to create buttons, then style buttons with "style"
for (let i = 1; i <= 20; i++) {
    let squareButton = document.createElement("button")
    squareButton.style.backgroundColor = "red";
    squareButton.style.height = "125px";
    squareButton.style.width = "125px";
    squareButton.style.color = "white";
    squareButton.style.fontSize = "32px";
    squareButton.style.fontWeight = "bold";
    squareButton.style.outline = "none";
    //create class
    squareButton.className = "button"
    //create numbers inside button
    squareButton.innerText = i;
    //appnd to main
    main.appendChild(squareButton);
}
//Select all squares, create for loop, and event
let squareGroup = document.querySelectorAll("button");
for (let x = 0; x < squareGroup.length; x++) {
    squareGroup[x].addEventListener ("click", () => {
       if (squareGroup[x].style.backgroundColor === "red") {
        squareGroup[x].style.backgroundColor = "green"
       } else {
        squareGroup[x].style.backgroundColor = "red";
       }
    });
}
