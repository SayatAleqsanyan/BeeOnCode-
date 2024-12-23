const game = document.querySelector("#game");

let rows = 8;
let cols = 8;
let bombs = 10;
let isLoesed = false;
let finsishing = false;

let timers = 0;
let tiv = bombs;



const howManyBombs = document.querySelector("#howManyBombs");
const timer = document.querySelector("#timer");
const startGanme = document.querySelector("#start");

// ----- Game Level ------------------------------------------------------------------------------------------------------------------------
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

  return (timers = 0);
});

const intermediate = document.querySelector("#intermediate");
intermediate.addEventListener("click", () => {
  rows = 8;
  cols = 8;
  bombs = 15;

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
  bombs = 28;

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

// ----- Timer -----------------------------------------------------------------------------------------------------------------------------
timer.innerHTML = 0;
const timerss = function (nam) {
  let timersss = setInterval(() => {
    timers++;
    timer.innerHTML = timers;
  }, nam * 1000);
  return timersss;
};
let myTimer = timerss(1);

// ----- Start Game -----------------------------------------------------------------------------------------------------------------------------
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

function createGame(rows, cols, bombs) {
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "closed");
    game.appendChild(cell);
  }
  createBombs(bombs);
}

// ----- Create Bombs -----------------------------------------------------------------------------------------------------------------------------
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

tiv = bombs;
howManyBombs.innerHTML = tiv;

// ----- Flags -----------------------------------------------------------------------------------------------------------------------------
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

// ----- Neighbours -----------------------------------------------------------------------------------------------------------------------------
function neighboursFunc(cells, cellIndex) {
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

  if (cellIndex % cols === 0) {
    neighbours[0] = undefined;
    neighbours[3] = undefined;
    neighbours[5] = undefined;
  }

  if (cellIndex % cols === cols - 1) {
    neighbours[2] = undefined;
    neighbours[4] = undefined;
    neighbours[7] = undefined;
  }

  if (cellIndex < cols) {
    neighbours[0] = undefined;
    neighbours[1] = undefined;
    neighbours[2] = undefined;
  }

  if (cellIndex >= cols * (rows - 1)) {
    neighbours[5] = undefined;      
    neighbours[6] = undefined;
    neighbours[7] = undefined;
  }
  return neighbours
}

// ----- Neighbours Open -----------------------------------------------------------------------------------------------------------------------------
function cellNeighbours(cell) {
  const cells = Array.from(document.querySelectorAll(".cell"));
  const cellIndex = cells.indexOf(cell);
  //   console.log(rows, cols, (rows * cols) % cellIndex === 0);
  
  neighbours = neighboursFunc(cells, cellIndex);

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

// ----- Open Cell -----------------------------------------------------------------------------------------------------------------------------
function openCell(cell) {
  if (cell.classList.contains("flag")) return;
  if (cell.classList.contains("open")) return;

  cell.classList.add("open");
  cell.classList.remove("closed");
  if (cell.getAttribute("mines") === "bomb") {
    document.querySelectorAll(".bomb").forEach((bomb) => {
      bomb.innerHTML = "💣";  
    });
    cell.innerHTML = "💥";
    cell.classList.add("bomb");
    isLoesed = true;
    clearInterval(myTimer);
    gameOver();
    return;
  }

  finishGame();
  if (finsishing === true) {
    document.querySelectorAll(".bomb").forEach((bomb) => {
      bomb.innerHTML = "💣";  
    });
    console.log("Victory!");
  }

  const mines = cellNeighbours(cell);
  if (mines > 0) {
    cell.innerHTML = mines;
    return;
  } else {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const cellIndex = cells.indexOf(cell);

    neighbours = neighboursFunc(cells, cellIndex);

    neighbours.forEach((neighbour) => {
      if (neighbour !== undefined && !neighbour.classList.contains("open")) {
        openCell(neighbour);
      }
    });
  }
}

// ----- Game Over -----------------------------------------------------------------------------------------------------------------------------
function gameOver() {
  startGanme.innerHTML = "💀";
  console.log("Game Over!");
}

// ----- Mouse Events -----------------------------------------------------------------------------------------------------------------------------
game.addEventListener("mousedown", (event) => {
  if (isLoesed) return;
  if (finsishing) return;
  if (event.target.classList.contains("cell")) {
    startGanme.innerHTML = "😮";
  }
});
document.addEventListener("mouseup", (event) => {
  if (isLoesed) return;
  startGanme.innerHTML = "😀";
  if (event.target.getAttribute("mines")) {
    startGanme.innerHTML = "💀";
  }
  if (finishGame()) {
    startGanme.innerHTML = "🎉";
  }
});

game.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (isLoesed) return;
  if (finsishing) return;
  if (event.target.classList.contains("cell")) {
    toggleFlag(event.target);
  }
});

game.addEventListener("click", (event) => {
  event.preventDefault();
  if (isLoesed) return;
  if (finsishing) return;
  if (event.target.classList.contains("cell")) {
    openCell(event.target);
  }
});

// ----- Victory -----------------------------------------------------------------------------------------------------------------------------
function finishGame() {
  finsishing = false;
  const totalCells = document.querySelectorAll(".cell").length; 
  const closedCells = document.querySelectorAll(".closed").length;
  if (closedCells === bombs) {
    const safeCells = totalCells - bombs;
    const openedSafeCells = document.querySelectorAll(".open:not(.bomb)").length; 
    if (openedSafeCells === safeCells) {
      startGanme.innerHTML = "🎉";
      clearInterval(myTimer);
      finsishing = true;
    }
  }
  return finsishing;
}

// ----- Finish -----------------------------------------------------------------------------------------------------------------------------
createGame(rows, cols, bombs);
