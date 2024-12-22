
const game = document.querySelector('#game');

let rows = 8
let cols = 8
let bombs = 10
let isLoesed = false


const howManyBombs = document.querySelector('#howManyBombs');
const timer = document.querySelector('#timer');

let timers = 0
timer.innerHTML = 0

const startGanme = document.querySelector('#start');

startGanme.addEventListener('click', () => {    
    game.innerHTML = '';
        createGame(rows, cols, bombs);
        isLoesed = false; 
        tiv = 10 
        howManyBombs.innerHTML = tiv

      
        startGanme.innerHTML = '😀'
    
        return timers = 0
})

setInterval(() => {
  timer.innerHTML = timers++
}, 1000)

/**
 * Create a game board in the #game element
 * @param {number} rows - number of rows
 * @param {number} cols - number of columns
 */
function createGame(rows, cols, bombs) {
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', 'closed');
        game.appendChild(cell);
    }
    createBombs(bombs); 
}

// create bombs
function createBombs(bombs) {
    let placedBombs = 0
    while (placedBombs < bombs) {
        const cells = document.querySelectorAll('.cell');
        const rndIndex = Math.floor(Math.random() * cells.length);
        const cell = cells[rndIndex];
        if (!cell.getAttribute('mines')) {
            cell.setAttribute('mines', 'bomb');
            placedBombs++
        }
    }
}

/**
 * Toggle flag on a cell
 * @param {Element} cell - cell element to toggle flag
 */
let tiv = 10
howManyBombs.innerHTML = tiv

function toggleFlag(cell) {

    if (cell.classList.contains('open')) return;
    const flags = document.querySelectorAll('.flag');

    // if (flags.length >= bombs) return;
    if (cell.classList.contains('flag')) {
        cell.classList.remove('flag');
        cell.innerHTML = '';
        tiv++
    } else if (flags.length >= bombs) {
        return
    } else {
        cell.classList.add('flag');
        cell.innerHTML = '🚩';
        tiv--
    }
  howManyBombs.innerHTML = tiv
}

function cellNeighbours(cell) {
    const cells = Array.from(document.querySelectorAll('.cell'));
    const cellIndex = cells.indexOf(cell);
    console.log(cellIndex);
    
}

function openCell(cell) {
    if (cell.classList.contains('flag')) return;
    if (cell.classList.contains('open')) return;

    cell.classList.add('open');
    cell.classList.remove('closed');
    if (cell.getAttribute('mines') === 'bomb') {
        cell.innerHTML = '💣';
        cell.classList.add('bomb')
        isLoesed = true;
        gameOver();
        return 
    }

    console.log(cellNeighbours(cell));
    
    console.log(cell);
}

function gameOver() {

    startGanme.innerHTML = '😮'

    alert('Game Over!');

}

// --------------------------------------------------------------------------------------------
game.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (isLoesed) return;
    if (event.target.classList.contains('cell')) {
        toggleFlag(event.target);
    }
})

game.addEventListener('click', (event) => {
    event.preventDefault();
    if (isLoesed) return;
    if (event.target.classList.contains('cell')) {
        openCell(event.target);
    }
})

createGame(rows, cols, bombs);
