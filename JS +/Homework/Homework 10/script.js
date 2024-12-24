const SIZE = 7;

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

    const colors= function () {
      if (SIZE % 2 === 1 && rowIndex === Math.floor(SIZE / 2) && colIndex === Math.floor(SIZE / 2)) {
        cell.style.backgroundColor = color13.value;
      } else if (SIZE % 2 === 1 && rowIndex === Math.floor(SIZE / 2) ) {
        cell.style.backgroundColor = color1.value;
      } else if (SIZE % 2 === 1 && colIndex === Math.floor(SIZE / 2)) {
        cell.style.backgroundColor = color2.value;
      } else if (rowIndex === colIndex) {
        cell.style.backgroundColor = color3.value;
      } else if (rowIndex + colIndex === SIZE - 1) {
        cell.style.backgroundColor = color4.value;
      } else if (rowIndex < colIndex && rowIndex + colIndex < SIZE - 1 && colIndex < SIZE / 2) {
        cell.style.backgroundColor = color5.value;
      } else if (rowIndex < colIndex && rowIndex + colIndex < SIZE - 1 && colIndex >= SIZE / 2) {
        cell.style.backgroundColor = color6.value;
      } else if (rowIndex < colIndex && rowIndex + colIndex > SIZE - 1 && rowIndex < SIZE / 2) {
        cell.style.backgroundColor = color7.value;
      } else if (rowIndex < colIndex && rowIndex + colIndex > SIZE - 1 && rowIndex >= SIZE / 2) {
        cell.style.backgroundColor = color8.value;
      } else if (rowIndex > colIndex && rowIndex + colIndex < SIZE - 1 && rowIndex < SIZE / 2) {
        cell.style.backgroundColor = color9.value;
      } else if (rowIndex > colIndex && rowIndex + colIndex < SIZE - 1 && rowIndex >= SIZE / 2) {
        cell.style.backgroundColor = color10.value;
      } else if (rowIndex > colIndex && rowIndex + colIndex > SIZE - 1 && colIndex < SIZE / 2) {
        cell.style.backgroundColor = color11.value;
      }else if (rowIndex > colIndex && rowIndex + colIndex > SIZE - 1 && colIndex >= SIZE / 2) {
        cell.style.backgroundColor = color12.value;
      }
    }
    
    colors() 
  
    newColors.addEventListener("click", colors) 

  });
});

