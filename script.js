"use strict";

function initGrid() {
    let size = howManySquares();

    for (let j = 0; j < size; j++) {
        const div = document.createElement("div");
        div.classList.add(`grid-square-${size}`);
        div.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "white";
        });
        gridContainer.appendChild(div);
    }
}

function howManySquares() {
    let howMany = Number(
        prompt(
            "how many squares per side? (even number; max number permitted is 100; defaults to 16"
        )
    );
    console.log(howMany % 2, typeof howMany);
    if (howMany % 2 === 1) howManySquares();
    return howMany;
}

const container = document.querySelector(".container");
const gridContainer = document.querySelector(".grid-container");
const reset = document.getElementById("reset-btn");

reset.addEventListener("click", () => location.reload());

initGrid();

// TODO __________________________________________________
// TODO current task:
// TODO ➡️ figure out how to display the grid ✅
// TODO ➡️ make reset button work ✅
// TODO ➡️ get user prompt to display choice of grid size
// TODO __________________________________________________
