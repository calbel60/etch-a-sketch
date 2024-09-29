const container = document.querySelector("#container")

let length = 16;
let height = 16;
let area = length * height

let gridNumber = 0;

for (let i = 0; i < length; i++) {
    const column = document.createElement("div");
    column.classList.add("column", "column-" + i);
    for (let j = 0; j < height; j++) {
        gridNumber++;
        const item = document.createElement("div");
        item.classList.add("grid", "grid-" + (gridNumber));
        column.appendChild(item);
    }

    container.appendChild(column);
}

