// Creates a row containing squaresPerSide div's of class 'tile'
function addTileRow(gameArea, squaresPerSide) {
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
    const gameArea = document.querySelector('#game-area');

    for(let i = 0; i < squaresPerSide; ++i) {
        addTileRow(gameArea, squaresPerSide);
    }
}

// Default 
createSketchPad(16);