import { isLoesed, timerss, changeDate } from "./utils.js";

// const { rows, cols, bombs, timerID, timers, maxFlags } = sessionStorage.getItem("data")
//   ? JSON.parse(sessionStorage.getItem("data"));

const game = document.querySelector("#game");
const howManyBombs = document.querySelector("#howManyBombs");
const timer = document.querySelector("#timer");
const startGame = document.querySelector("#start");

/**
 * Create a game board in the #game element
 * @param {number} rows - number of rows
 * @param {number} cols - number of columns
 */
function createGame(rows, cols, bombs) {
  game.innerHTML = "";
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "closed");
    game.appendChild(cell);
  }
  timer.innerHTML = 0;
  // maxFlags = bombs;
  howManyBombs.innerHTML = maxFlags;
  changeDate("maxFlags", bombs);
  startGame.innerHTML = "😀";
  createBombs(bombs);
  isLoesed(false);
  const test = timerss();
  sessionStorage.setItem(
    "data",
    JSON.stringify({
      isLoesed: false,
      rows: 8,
      cols: 8,
      bombs: 10,
      timers: 0,
      maxFlags: 10,
      timerID: null,
    })
  );
  changeDate("timerID", test);
}

// create bombs
function createBombs(bombs) {
  let placedBombs = 0;
  while (placedBombs < bombs) {
    const cells = document.querySelectorAll(".cell");
    const rndIndex = Math.floor(Math.random() * cells.length);
    const cell = cells[rndIndex];
    if (!cell.getAttribute("mines")) {
      cell.setAttribute("mines", "bomb");
      placedBombs++;
    }
  }
}

function toggleFlag(cell) {
  if (cell.classList.contains("open")) return;
  const flags = document.querySelectorAll(".flag");
  if (cell.classList.contains("flag")) {
    cell.classList.remove("flag");
    cell.innerHTML = "";
    changeDate("maxFlags", maxFlags + 1);
  } else if (flags.length >= bombs) {
    return;
  } else {
    cell.classList.add("flag");
    cell.innerHTML = "🚩";
    changeDate("maxFlags", maxFlags - 1);
  }
  howManyBombs.innerHTML = maxFlags;
}

function cellNeighbours(cell) {
  const cells = Array.from(document.querySelectorAll(".cell"));
  const cellIndex = cells.indexOf(cell);
}

function openCell(cell) {
  if (cell.classList.contains("flag")) return;
  if (cell.classList.contains("open")) return;

  cell.classList.add("open");
  cell.classList.remove("closed");
  if (cell.getAttribute("mines") === "bomb") {
    cell.innerHTML = "💣";
    cell.classList.add("bomb");
    isLoesed(true);
    console.log(timerID, rows, cols);
    clearInterval(timerID);
    gameOver();
    return;
  }
  // console.log(cellNeighbours(cell));
  console.log(cell);
}

function gameOver() {
  console.log("Game Over!");
  clearInterval(timerID);
}
// --------------------------------------------------------------------------------------------

createGame(rows, cols, bombs);
export { createGame, toggleFlag, openCell, cellNeighbours, gameOver };
