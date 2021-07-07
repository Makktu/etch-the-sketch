"use strict";

function initGrid() {
    gridContainer.innerHTML = "";
    let size = howManySquares();
    // need to calculate size of cells relative to width of board -- which is...

    // let cellSize = 40/size;
    for (let k = 0; k < size; k++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add(`grid-square-${size}`);
            div.addEventListener("mouseover", function (e) {
                if (toggle === 1) {
                    e.target.style.backgroundColor = "black";
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
const messages = document.querySelector(".messages");

let toggle = 0;

gridContainer.addEventListener("click", () => {
    if (toggle === 1) {
        toggle = 0;
    } else {
        toggle = 1;
    }
});

reset.addEventListener("click", initGrid);

initGrid();

// TODO __________________________________________________
// TODO current task:
// TODO ➡️ figure out how to display the grid ✅
// TODO ➡️ make reset button work ✅
// TODO ➡️ get user prompt to display choice of grid size
// TODO __________________________________________________
