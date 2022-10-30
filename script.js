const container = document.getElementById('container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16, 16);

function gridPrompt() {
    let gridSize = +prompt("Enter grid size in pixels (max 100):");
    makeGrid(5, 5);
}

