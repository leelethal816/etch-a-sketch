const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.createElement("button");
button.textContent = "Update Grids";
body.insertBefore(button, container);
let gridSize = 0;
let opacity = 0;

button.addEventListener("click", () => {
    gridSize = 0;
    opacity = 0;
    container.replaceChildren();
    while (gridSize > 100 || gridSize <= 0) {
        gridSize = Number(prompt("How many squares per side? (Between 1 to 100)"));
    }
    createGrid(gridSize, gridSize);
})

function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        container.appendChild(gridItem);

        gridItem.addEventListener("mouseover", () => {
            gridItem.style.background = getRandomColor();
        })
        gridItem.style.width = `calc(100% / ${rows})`;
        gridItem.style.height = `calc(100% / ${cols})`;
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    opacity += 10;
    return `rgb(${r} ${g} ${b} / ${opacity}%)`;
}