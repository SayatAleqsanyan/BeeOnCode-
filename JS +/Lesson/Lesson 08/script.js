// const link = document.querySelector('a');

// const singleAttribute = link.getAttribute('href'); // "https://www.google.com"
// const multiplyAttributes = link.getAttributeNames(); // ["href", "target"]

// console.log(singleAttribute);
// console.log(multiplyAttributes);


// link.setAttribute('href', 'https://www.bing.com');



// link.removeAttribute('target');

const game = document.querySelector('#game');

let rows = 8
let cols = 8
let bombs = 10
let isLoesed = false

// FIXME create a game UI with a flag count and timer


/**
 * Create a game board in the #game element
 * @param {number} rows - number of rows
 * @param {number} cols - number of columns
 */
function createGame(rows, cols, bombs) {
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
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
function toggleFlag(cell) {
    if (cell.classList.contains('open')) return;
    const flags = document.querySelectorAll('.flag');
    if (flags.length >= bombs) return;
    if (cell.classList.contains('flag')) {
        cell.classList.remove('flag');
        cell.innerHTML = '';
    } else {
        cell.classList.add('flag');
        cell.innerHTML = '🚩';
    }
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
    if (cell.getAttribute('mines') === 'bomb') {
        cell.innerHTML = '💣';
        cell.classList.add('bomb')
        isLoesed = true;
        gameOver();
        return;
    }

    console.log(cellNeighbours(cell));
    
    console.log(cell);
}

function gameOver() {
    const result = confirm('Game Over! Do you want try again?');
    if (result) {
        game.innerHTML = '';
        createGame(rows, cols, bombs);
        isLoesed = false;
    }
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

// cell.innerHTML = '💣';