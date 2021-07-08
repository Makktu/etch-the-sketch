"use strict";

function initGrid() {
    toggle = 0;
    colTog = 0;
    gridContainer.innerHTML = "";
    let size = howManySquares();
    // need to calculate size of cells relative to width of board -- which is...

    // let cellSize = 40/size;
    for (let k = 0; k < size; k++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add(`grid-square-${size}`);
            div.addEventListener("mouseover", function (e) {
                if (toggle === 1 && colTog === 0) {
                    e.target.style.backgroundColor = "black";
                }
                if (toggle === 1 && colTog === 1) {
                    let r = Math.trunc(Math.random() * 257);
                    let g = Math.trunc(Math.random() * 257);
                    let b = Math.trunc(Math.random() * 257);
                    messages.textContent = `rgb(${r},${g},${b})`;

                    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                }
            });
            gridContainer.appendChild(div);
        }
    }
}

function howManySquares() {
    let radioButtonChoice = document.querySelectorAll("input[name='size']");
    let selectedOne;
    for (let one of radioButtonChoice) {
        if (one.checked) {
            selectedOne = one.value;
            break;
        }
    }

    // let howMany = ;
    return selectedOne;
}

const container = document.querySelector(".container");
const gridContainer = document.querySelector(".grid-container");
const reset = document.getElementById("reset-btn");
const colorToggle = document.querySelector(".colours");
const messages = document.querySelector(".messages");

let toggle = 0;
let colTog = 0; // color trail off by default

gridContainer.addEventListener("click", () => {
    if (toggle === 1) {
        toggle = 0;
    } else {
        toggle = 1;
    }
});

reset.addEventListener("click", initGrid);

colorToggle.addEventListener("click", () => {
    if (colTog === 1) {
        colTog = 0;
    } else {
        colTog = 1;
    }
});

initGrid();

// TODO __________________________________________________
// TODO current task:
// TODO ➡️ figure out how to display the grid ✅
// TODO ➡️ make reset button work ✅
// TODO ➡️ get user prompt to display choice of grid size
// TODO __________________________________________________
