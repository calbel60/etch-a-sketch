const container = document.querySelector("#container")
const screen = document.querySelector("#screen");

let width = 16;
let height = 16;
let area = length * height;

let gridNumber = 0;

let makeGrid = (height, width) => {
    for (let i = 0; i < width; i++) {
        const column = document.createElement("div");
        column.classList.add("column", "column-" + i);
        for (let j = 0; j < height; j++) {
            gridNumber++;
            const item = document.createElement("div");
            item.classList.add("grid", "grid-" + gridNumber);
            column.appendChild(item);
        }

        screen.appendChild(column);
    }
    container.appendChild(screen);
}

makeGrid(height, width);