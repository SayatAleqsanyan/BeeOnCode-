const game = document.querySelector("#game");

const newGame = document.querySelector("#newGame");
const result = document.querySelector("#result");

let matrix = Array.from({ length: 3 }, () => Array(3).fill(null));
let player = "X";
let bot = "O";
let currentPlayer = "X";
let isBot = false;
let isSecond = false;
let botMode = false;
let gameProcess = true;
let timeoutId = null;

// creat game ----- խաղի ստեղծում --------------------------
function createGame() {
  gameProcess = true;
  stopTimeout();
  isBot = false;
  player = "X";
  bot = "O";
  if (isSecond) {
    isBot = true;
    player = "O"; 
    bot = "X";
  }

  game.innerHTML = "";
  matrix = Array.from({ length: 3 }, () => Array(3).fill(null));
  currentPlayer = "X";
  result.innerHTML = "";

  matrix.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("row", rowIndex);
      cell.setAttribute("col", colIndex);
      cell.addEventListener("click", () => {
        move(rowIndex, colIndex);
      });
      game.appendChild(cell);
    });
  });

  if (isBot) {
    timeoutId = setTimeout(() => {
      botMove();
    }, 1000);
  }
}

// choice X or O ----- ընտրություն X կամ O ----------------------------------------------
{
  const playX = document.querySelector("#btnX");
  const playO = document.querySelector("#btnO");

  playX.addEventListener("click", () => {
    isSecond = false;
    createGame();
  });

  playO.addEventListener("click", () => {
    isSecond = true;
    createGame();
  });
}

// bot step stop ----- բոտի քայլի կանգ -------------------------------------
function stopTimeout() {
  clearTimeout(timeoutId);
}

// The player's play function ---- Խաղացողի խաղալու ֆունկցիան ----------------------------------------
function move(row, col) {
  if (matrix[row][col] !== null || isBot || isDraw() || !gameProcess) return;

  matrix[row][col] = currentPlayer;
  updateBoard(); // թարմացնենք կայքի վիզուալը

  if (checkWin(currentPlayer)) {
    gameProcess = false;
    result.innerHTML = `Player ${currentPlayer} wins!`;
    return;
  }

  currentPlayer = bot;
  isBot = true;
  timeoutId = setTimeout(() => {
    botMove();
  }, 1000);
}

// bot logic ---- բոտի տրամաբանություն ----------------------------
function botMove() {
  if (!isDraw()) {
    if (!botMode) {
      randomMove();
    } else {
      hardBotMove();
    }
  } else {
    result.innerHTML = "Draw!";
    return;
  }
  updateBoard(); // թարմացնենք կայքի վիզուալը
  if (checkWin(bot)) {
    result.innerHTML = `Bot wins!`;
    return;
  }

  currentPlayer = player;
  isBot = false;
}

function randomMove() {
  const azatDashter = [];
  matrix.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      if (matrix[rowIndex][colIndex] === null) {
        azatDashter.push([rowIndex, colIndex]);
      }
    });
  });
  if (azatDashter.length > 0) {
    const randomIndex = Math.floor(Math.random() * azatDashter.length);
    matrix[azatDashter[randomIndex][0]][azatDashter[randomIndex][1]] = bot;
  }
}

function hardBotMove() {
  let bestScore = -Infinity;
  let move = null;

  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (matrix[rowIndex][colIndex] === null) {
        matrix[rowIndex][colIndex] = bot; // բոթը իր քայլը արեց
        let score = minimax(matrix, 0, false);
        matrix[rowIndex][colIndex] = null; // Բոթի արած դաշտը մաքրեց
        if (score > bestScore) {
          bestScore = score;
          move = { rowIndex, colIndex };
        }
      }
    });
  });

  if (move) {
    if (bestScore < 0) {
        randomMove()
    } else {
        matrix[move.rowIndex][move.colIndex] = bot;
    }
  }
}

let hardCount = 10 

function minimax(matrix, depth, isMaximizing) {
  //   if (depth >= 6) {
  //     return 0;
  //   }
    if (checkWin(player)) { return depth - 9}
    if (checkWin(bot)) { return 9 - depth}
    if (isDraw()) { return 0}
    if (depth >= hardCount) { return hardCount}
    
    if (isMaximizing) {
    // Բոտի քայլի դեպքում
    let bestScore = -Infinity;
    matrix.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (matrix[rowIndex][colIndex] === null) {
          matrix[rowIndex][colIndex] = bot; // Բոթը իր քայլը արեց
          let score = minimax(matrix, depth + 1, false);
          matrix[rowIndex][colIndex] = null; // Բոթի արած դաշտը մաքրեց
          bestScore = Math.max(score, bestScore);
        }
      });
    });
    return bestScore;
  } else {
    // Խաղացողի քայլի դեպքում
    let bestScore = Infinity;
    matrix.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (matrix[rowIndex][colIndex] === null) {
          matrix[rowIndex][colIndex] = player; // Խաղացողի տեղը քայլ արեց
          let score = minimax(matrix, depth + 1, true);
          matrix[rowIndex][colIndex] = null; // Խաղացողի արած դաշտը մաքրեց
          bestScore = Math.min(score, bestScore);
        }
      });
    });
    return bestScore;
  }
}
// bot -ի eventner
document.querySelector("#switchBot").addEventListener("click", changeBotMode);

function changeBotMode() {
  this.classList.toggle("activeBot");
  botMode = !botMode;
  createGame();
}

// Game logic ---- Խաղի տրամաբանություն -----------------------------
function updateBoard() {
  matrix.forEach((row, rowIndex) => {
    row.forEach((_, colIndex) => {
      const cell = document.querySelector(
        `[row="${rowIndex}"][col="${colIndex}"]`
      );
      cell.textContent = matrix[rowIndex][colIndex];
      if (matrix[rowIndex][colIndex]) {
        cell.classList.add("active");
      }
    });
  });
}

// checking the game result ---- խաղի արդյունքի ստուգում ----------------
/**
 *
 * @param {*} String player
 * @returns Boolean
 */
function checkWin(player) {
  const combo = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  // for (let i = 0; i < combo.length; i++) {
  //     if (combo[i].every(([r, c]) => matrix[r][c] === player)) {
  //         console.log('win');
  //         return true;
  //     }
  // }
  const win = combo.some((com) => {
    return com.every(([r, c]) => matrix[r][c] === player);
  });

  return win;
}

/**
 *
 * @returns Boolean
 */
function isDraw() {
  return matrix.flat().every((el) => el !== null);
}
isDraw();

// game creation cal ---- խաղի ստեղծուման կանչ ------------------------------
createGame();

// new game ---- նոր խաղ ------------------------------
newGame.addEventListener("click", () => {
  createGame();
});
