const SIZE = 10;

const matrix = Array(SIZE)
  .fill(null)
  .map(() => Array(SIZE).fill(null));

const container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${SIZE}, 100px)`;
container.style.gridTemplateRows = `repeat(${SIZE}, 100px)`;

matrix.forEach((row, rowIndex) => {
  row.forEach((_, colIndex) => {
    const cell = document.createElement("div");
    cell.style.border = "1px solid black";
    cell.style.borderRadius = "10px";
    cell.style.gap = "10px";
    cell.style.display = "flex";
    cell.style.justifyContent = "center";
    cell.style.alignItems = "center";
    cell.innerText = `${rowIndex} - ${colIndex}`;
    cell.style.cursor = "pointer";
    container.appendChild(cell);

    if (rowIndex === colIndex) {
      cell.style.backgroundColor = "red";
    } else if (rowIndex + colIndex === SIZE - 1) {
      cell.style.backgroundColor = "blue";
    } else if (rowIndex < colIndex && rowIndex + colIndex < SIZE - 1 && colIndex < SIZE / 2) {
      cell.style.backgroundColor = "green";
    } else if (rowIndex < colIndex && rowIndex + colIndex < SIZE - 1 && colIndex >= SIZE / 2) {
      cell.style.backgroundColor = "lightblue";
    } else if (rowIndex < colIndex && rowIndex + colIndex > SIZE - 1) {
      cell.style.backgroundColor = "orange";
    } else if (rowIndex > colIndex && rowIndex + colIndex < SIZE - 1) {
      cell.style.backgroundColor = "pink";
    } else if (rowIndex > colIndex && rowIndex + colIndex > SIZE - 1) {
      cell.style.backgroundColor = "yellow";
    }
  });
});

console.log(matrix);
