const game = document.querySelector("#game");

let matrix = Array.from({length: 3}, () => Array(3).fill(null));
let player = 'X'
let bot = 'O'
let currentPlayer = 'X';
let isBot = false;

function createGame() {
    game.innerHTML = '';
    matrix = Array.from({length: 3}, () => Array(3).fill(null));
    currentPlayer = 'X'; 

    matrix.forEach((row, rowIndex) => {
        row.forEach((_, colIndex) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('row', rowIndex);
            cell.setAttribute('col', colIndex);
            cell.addEventListener('click', () => move(rowIndex, colIndex))
            game.appendChild(cell)
        })
    })
}

// Խաղացողի խաղալու ֆունկցիան -----------------
function move(row, col) {
    if ((matrix[row][col] !== null) || isBot || isDraw()) return;

    matrix[row][col] = currentPlayer;
    updateBoard();      // թարմացնենք կայքի վիզուալը

    if (checkWin(currentPlayer)) {
        alert(`Player ${currentPlayer} wins!`);
        return;
    }

    currentPlayer = bot;
    isBot = true
    setTimeout(() => {
        botMove();
    }, 1000);
}

// bot logic --------------------------------
function botMove() {

    if (!isDraw()) {
        randomMove()
    } else {
        alert('Draw!')
        return; 
    }
    updateBoard()      // թարմացնենք կայքի վիզուալը
    if (checkWin(bot)) {
        alert(`Bot wins!`);
        return;
    }
    currentPlayer = player
    isBot = false
}

function randomMove() {
    const azatDashter = []
    matrix.forEach((row, rowIndex) => {
        row.forEach((_, colIndex) => {
            if (matrix[rowIndex][colIndex] === null) {
                azatDashter.push([rowIndex, colIndex])
            }
        })
    })
    if (azatDashter.length > 0) {
        const randomIndex = Math.floor(Math.random() * azatDashter.length);
        matrix[azatDashter[randomIndex][0]][azatDashter[randomIndex][1]] = bot
    }
}


// Game logic ---------------------------------
function updateBoard() {
    matrix.forEach((row, rowIndex) => {
        row.forEach((_, colIndex) => {
            const cell = document.querySelector(`[row="${rowIndex}"][col="${colIndex}"]`);
            cell.textContent = matrix[rowIndex][colIndex];
            if (matrix[rowIndex][colIndex]) {
                cell.classList.add('active');
            }
        })
    })
}

/**
 * 
 * @param {*} String player 
 * @returns Boolean
 */
function checkWin(player) {
    const combo = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ]

    // for (let i = 0; i < combo.length; i++) {
    //     if (combo[i].every(([r, c]) => matrix[r][c] === player)) {
    //         console.log('win');
    //         return true;
    //     }
    // }
    const win = combo.some(com => {
        return com.every(([r, c]) => matrix[r][c] === player)
    })

    return win;
}

/**
 * 
 * @returns Boolean
 */
function isDraw() {
    return matrix.flat().every((el) => el !== null)
}
isDraw();
// game start
createGame();
