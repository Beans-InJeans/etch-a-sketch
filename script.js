const container = document.getElementById('container');

function makeGrid(rows, cols) {
    if (document.getElementsByClassName('grid-item').length > 0) {
        document.getElementsByClassName('grid-item').remove();
    }

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16, 16);

function removeCurrentGrid() {
    let currentGrid = document.getElementById("container");
    currentGrid.innerHTML = '';
}

function gridPrompt() {
    let gridSize = +prompt("Enter grid size in pixels (max 100):");
    
    if (gridSize == 0) {
        return;
    } else if (gridSize > 100) {
        alert("Values over 100 not allowed.");
        return;
    } else {
        removeCurrentGrid();
        makeGrid(gridSize, gridSize);
        return;
    }
};

