"use strict";

const container = document.querySelector(".container");
const gridContainer = document.querySelector(".grid-container");

// let howManySquares = prompt("How many?");

let howManySquares = 256;

for (let j = 0; j < howManySquares; j++) {
    const div = document.createElement("div");
    div.classList.add("grid-square");
    div.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "white";
    });
    gridContainer.appendChild(div);
}

// TODO __________________________________________________
// TODO current task:
// TODO figure out how to display the grid (basic 4x4)
// TODO __________________________________________________
