const gameArea = document.querySelector('#game-area');
const changeDimensionsButton = document.querySelector('#change-dimension-button');
const resetButton = document.querySelector('#reset-button');
let currentSquaresPerSide = 16;

function clearGameArea() {
    while(gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild);
    }
}

// Creates a row containing squaresPerSide div's of class 'tile'
function addTileRow(squaresPerSide) {
    const tileRow = document.createElement('div');
    tileRow.classList.add('tile-row');

    for(let i = 0; i < squaresPerSide; ++i) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tileRow.appendChild(tile);
    }

    gameArea.appendChild(tileRow);
}

// Creates squaresPerSide X squaresPerSide grid using flex box elements.
function createSketchPad(squaresPerSide) {
    if(isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) return;

    currentSquaresPerSide = squaresPerSide;

    clearGameArea();

    for(let i = 0; i < squaresPerSide; ++i) {
        addTileRow(squaresPerSide);
    }
}

changeDimensionsButton.addEventListener('click', ()=> {
    let squaresPerSide = prompt("Please enter the new dimension value of the grid(1 - 100)");

    createSketchPad(squaresPerSide);
})

resetButton.addEventListener('click', ()=>{
    createSketchPad(currentSquaresPerSide);
})

// Default 
createSketchPad(currentSquaresPerSide);