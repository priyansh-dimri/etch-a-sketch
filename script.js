const gameArea = document.querySelector("#game-area");
const changeDimensionsButton = document.querySelector(
  "#change-dimension-button"
);
const resetButton = document.querySelector("#reset-button");
const randomizeButton = document.querySelector("#randomize-button");

let currentSquaresPerSide = 16;
let randomize = false;

function getRandomRGBValue() {
  let randomRGBValuesList = [];

  for (let i = 0; i < 3; ++i) {
    let rgbValue = Math.floor(Math.random() * 256);
    randomRGBValuesList.push(rgbValue);
  }

  return `rgb(${randomRGBValuesList[0]}, ${randomRGBValuesList[1]}, ${randomRGBValuesList[2]})`;
}

function clearGameArea() {
  while (gameArea.firstChild) {
    gameArea.removeChild(gameArea.firstChild);
  }
}

function modifyTileBackgroundColor(tile) {
  if (!tile.style.backgroundColor) {
    tile.style.backgroundColor = randomize ? getRandomRGBValue() : "red";
  }
}

function modifyTileOpacity(tile) {
  let currentOpacity = parseFloat(tile.style.opacity);

  if (isNaN(currentOpacity)) {
    tile.style.opacity = 0.1;
  } else if (tile.style.opacity < 1.0) {
    tile.style.opacity = currentOpacity + 0.1;
  }
}

// Creates a row containing squaresPerSide div's of class 'tile'
function addTileRow(squaresPerSide) {
  const tileRow = document.createElement("div");
  tileRow.classList.add("tile-row");

  for (let i = 0; i < squaresPerSide; ++i) {
    let tile = document.createElement("div");
    tile.classList.add("tile");

    tile.addEventListener("mouseover", () => {
      modifyTileBackgroundColor(tile);
      modifyTileOpacity(tile);
    });

    tileRow.appendChild(tile);
  }

  gameArea.appendChild(tileRow);
}

// Creates squaresPerSide X squaresPerSide grid using flex box elements.
function createSketchPad(squaresPerSide) {
  if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100)
    return;

  currentSquaresPerSide = squaresPerSide;

  clearGameArea();

  for (let i = 0; i < squaresPerSide; ++i) {
    addTileRow(squaresPerSide);
  }
}

changeDimensionsButton.addEventListener("click", () => {
  let squaresPerSide = prompt(
    "Please enter the new dimension value of the grid(1 - 100)"
  );

  createSketchPad(squaresPerSide);
});

resetButton.addEventListener("click", () => {
  createSketchPad(currentSquaresPerSide);
});

randomizeButton.addEventListener("click", () => {
  randomize = !randomize;
});

// Default
createSketchPad(currentSquaresPerSide);
