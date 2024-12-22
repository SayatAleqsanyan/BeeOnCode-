const game = document.querySelector("#game");

let rows = 8;
let cols = 8;
let bombs = 10;
let isLoesed = false;

let timers = 0;
let tiv = bombs;

const howManyBombs = document.querySelector("#howManyBombs");
const timer = document.querySelector("#timer");
const startGanme = document.querySelector("#start");

const beginner = document.querySelector("#beginner");
beginner.addEventListener("click", () => {
  rows = 5;
  cols = 5;
  bombs = 7;

  game.innerHTML = "";
  createGame(rows, cols, bombs);
  isLoesed = false;
  tiv = bombs;
  howManyBombs.innerHTML = tiv;
  clearInterval(myTimer);
  myTimer = timerss(1);
  startGanme.innerHTML = "😀";

  game.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
  game.style.gridTemplateRows = `repeat(${rows}, 50px)`;
  // grid-template-columns: repeat(8, 50px);
  //   grid-auto-rows: repeat(8, 50px);

  return (timers = 0);
});

const intermediate = document.querySelector("#intermediate");
intermediate.addEventListener("click", () => {
  rows = 8;
  cols = 8;
  bombs = 12;

  game.innerHTML = "";
  createGame(rows, cols, bombs);
  isLoesed = false;
  tiv = bombs;
  howManyBombs.innerHTML = tiv;
  clearInterval(myTimer);
  myTimer = timerss(1);
  startGanme.innerHTML = "😀";

  game.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
  game.style.gridTemplateRows = `repeat(${rows}, 50px)`;

  return (timers = 0);
});

const expert = document.querySelector("#expert");
expert.addEventListener("click", () => {
  rows = 8;
  cols = 16;
  bombs = 20;

  game.innerHTML = "";
  createGame(rows, cols, bombs);
  isLoesed = false;
  tiv = bombs;
  howManyBombs.innerHTML = tiv;
  clearInterval(myTimer);
  myTimer = timerss(1);
  startGanme.innerHTML = "😀";

  game.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
  game.style.gridTemplateRows = `repeat(${rows}, 50px)`;

  return (timers = 0);
});

timer.innerHTML = 0;
const timerss = function (nam) {
  let timersss = setInterval(() => {
    timers++;
    timer.innerHTML = timers;
  }, nam * 1000);
  return timersss;
};
let myTimer = timerss(1);

startGanme.addEventListener("click", () => {
  game.innerHTML = "";
  createGame(rows, cols, bombs);
  isLoesed = false;
  tiv = bombs;
  howManyBombs.innerHTML = tiv;
  clearInterval(myTimer);
  myTimer = timerss(1);
  startGanme.innerHTML = "😀";

  return (timers = 0);
});

/**
 * Create a game board in the #game element
 * @param {number} rows - number of rows
 * @param {number} cols - number of columns
 */
function createGame(rows, cols, bombs) {
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "closed");
    game.appendChild(cell);
  }
  createBombs(bombs);
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
      cell.classList.add("bomb");
      placedBombs++;
    }
  }
}

/**
 * Toggle flag on a cell
 * @param {Element} cell - cell element to toggle flag
 */
tiv = bombs;
howManyBombs.innerHTML = tiv;

function toggleFlag(cell) {
  if (cell.classList.contains("open")) return;
  const flags = document.querySelectorAll(".flag");

  // if (flags.length >= bombs) return;
  if (cell.classList.contains("flag")) {
    cell.classList.remove("flag");
    cell.innerHTML = "";
    tiv++;
  } else if (flags.length >= bombs) {
    return;
  } else {
    cell.classList.add("flag");
    cell.innerHTML = "🚩";
    tiv--;
  }
  howManyBombs.innerHTML = tiv;
}

function cellNeighbours(cell) {
  const cells = Array.from(document.querySelectorAll(".cell"));
  const cellIndex = cells.indexOf(cell);
  //   console.log(rows, cols, (rows * cols) % cellIndex === 0);

  const neighbours = [
    cells[cellIndex - cols - 1],
    cells[cellIndex - cols],
    cells[cellIndex - cols + 1],
    cells[cellIndex - 1],
    cells[cellIndex + 1],
    cells[cellIndex + cols - 1],
    cells[cellIndex + cols],
    cells[cellIndex + cols + 1],
  ];

  const isValidNeighbour = neighbours.filter(
    (neighbour) => neighbour !== undefined
  );
  return isValidNeighbour.reduce((acc, neighbour) => {
    if (neighbour.getAttribute("mines") === "bomb") {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function openCell(cell) {
  if (cell.classList.contains("flag")) return;
  if (cell.classList.contains("open")) return;

  cell.classList.add("open");
  cell.classList.remove("closed");
  if (cell.getAttribute("mines") === "bomb") {
    cell.innerHTML = "💣";
    cell.classList.add("bomb");
    isLoesed = true;
    clearInterval(myTimer);
    gameOver();
    return;
  }

  const mines = cellNeighbours(cell);
  if (mines > 0) {
    cell.innerHTML = mines;
    return;
  } else {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const cellIndex = cells.indexOf(cell);
    const neighbours = [
      cells[cellIndex - cols - 1],
      cells[cellIndex - cols],
      cells[cellIndex - cols + 1],
      cells[cellIndex - 1],
      cells[cellIndex + 1],
      cells[cellIndex + cols - 1],
      cells[cellIndex + cols],
      cells[cellIndex + cols + 1],
    ];

    neighbours.forEach((neighbour) => {
      if (neighbour !== undefined && !neighbour.classList.contains("open")) {
        openCell(neighbour);
      }
    });
  }
  console.log();

  console.log(cell);
}

function gameOver() {
  startGanme.innerHTML = "😮";

  alert("Game Over!");
}

// --------------------------------------------------------------------------------------------
game.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (isLoesed) return;
  if (event.target.classList.contains("cell")) {
    toggleFlag(event.target);
  }
});

game.addEventListener("click", (event) => {
  event.preventDefault();
  if (isLoesed) return;
  if (event.target.classList.contains("cell")) {
    openCell(event.target);
  }
});

createGame(rows, cols, bombs);
