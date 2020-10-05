const mainDiv = document.querySelectorAll("main");
main.style.flex = "flex";
main.style.justifyContent = "center";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.flexDirection = "column";
main.style.alignItems = "center";
//create element for the header div and append to main
let headerDiv = document.createElement("div");
headerDiv.style.height = "120px";
headerDiv.style.width = "100%";
main.appendChild(headerDiv);


//for loop to create circle buttons
for (let i = 1; i <= 20; i++) {
    let cirleButton = document.createElement("button")
    cirleButton.style.backgroundColor = "red";
    cirleButton.style.height = "70px";
    cirleButton.style.width = "70px";
    cirleButton.style.borderRadius = "50%";
    cirleButton.style.border = "white";
    cirleButton.style.color = "white";
    cirleButton.style.fontSize = "32px";
    cirleButton.style.fontWeight = "bold";
    cirleButton.style.outline = "none";
    cirleButton.style.position = "absolute";
    cirleButton.style.left = `${Math.random() * 60}vh`;
    cirleButton.style.top = `${Math.random() * 60}vw`;
    //create class
    cirleButton.className = "button";
    //create numbers inside button
    cirleButton.innerText = i;
    //appnd to main
    main.appendChild(cirleButton);
}
//Select all buttons, create for loop, and event
let circleGroup = document.querySelectorAll("button");
for (let x = 0; x < circleGroup.length; x++) {
    circleGroup[x].addEventListener ("click", () => {
       if (circleGroup[x].style.backgroundColor === "red") {
        circleGroup[x].style.backgroundColor = "green"
       } else {
        circleGroup[x].style.backgroundColor = "red";
       }
    });
}