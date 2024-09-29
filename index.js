const container = document.querySelector("#container")
const screen = document.querySelector("#screen");


let size = 16;
let area = size * size;

let gridNumber = 0;

// Grid Size button

const gridSizeButton = document.createElement("div");

gridSizeButton.classList.add("button");
gridSizeButton.textContent = "Grid Size";
gridSizeButton.addEventListener("mouseover", () => {
    gridSizeButton.style.backgroundColor = "red";
})
gridSizeButton.addEventListener("mouseleave", () => {
    gridSizeButton.style.backgroundColor = "grey";
})
gridSizeButton.addEventListener("click", () => {
    deleteGrid();
    getGridSize();
    makeGrid(size);
})
container.appendChild(gridSizeButton);

// Append Screen
container.appendChild(screen);


// Clear grid button

const clearGrid = document.createElement("div");

clearGrid.classList.add("button")
clearGrid.textContent = "Clear Grid";

clearGrid.addEventListener("mouseover", () => {
    clearGrid.style.backgroundColor = "red";
})
clearGrid.addEventListener("mouseleave", () => {
    clearGrid.style.backgroundColor = "grey";
})
clearGrid.addEventListener("click", () => {
    deleteGrid();
    makeGrid(size);
})

container.appendChild(clearGrid);


let makeGrid = (size) => {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column", "column-" + i);
        for (let j = 0; j < size; j++) {
            gridNumber++;
            const item = document.createElement("div");
            item.classList.add("grid", "grid-" + gridNumber);

            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            })

            column.appendChild(item);
        }

        screen.appendChild(column);
    }
    
}

let deleteGrid = () => {
    screen.textContent = "";
}

let getGridSize = () => {
    let newSize = prompt("What would you like the height and width of the grid to be?");
    newSize = Number(newSize)
    if (newSize > 100) {
        size = 100;
    } else if (Number.isInteger(newSize)) {
        size = newSize;
    } else {
        size = size;
    }
}

makeGrid(size);