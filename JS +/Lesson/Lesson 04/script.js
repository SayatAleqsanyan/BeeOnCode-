function color() {
  let r = Math.floor(Math.random() * 256);
  let g = parseInt(Math.random() * 256);
  let b = ~~(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const d1 = document.getElementById("d1");
// d1.addEventListener('mousemove', (e) => {
//   d1.style.backgroundColor = color()
//   console.log(this);
// })

// mouseUp
// d1.addEventListener('mouseup', (e) => {
//   d1.style.backgroundColor = color()
//   console.log("up");
// })
// d1.addEventListener('mousedown', (e) => {
//   d1.style.backgroundColor = color()
//   console.log("down");
// })
// -----------------------------------------
// d1.addEventListener('contextmenu', (e) => {
//   e.preventDefault()
//   console.log(e);

//   d1.style.backgroundColor = color()
//   console.log("contextmenu");
// })
// -----------------------------------------

// d1.addEventListener('mousedown', (e) => {
//   console.log(6666666666);
//   d1.style.position = 'relative'
//   d1.style.top = "-15px"
// })
// d1.addEventListener('mouseup', (e) => {
//   console.log(5555555555);

//   d1.style.position = 'relative'
//   d1.style.top = "0px"
// })

// -----------------------------------------
const keyPresed = [];
document.addEventListener("keyup", (e) => {
  console.log(e.key);
  
  if (keyPresed.includes(e.key)) {
    e.preventDefault()
    let index = keyPresed.indexOf(e.key)
    keyPresed.splice(index, 1)
  }
})

document.addEventListener("keydown", (e) => {
  let gortsakits = 5 * keyPresed.includes("Shift") ? 10 : 1;
  switch (e.key) {
    case "ArrowUp":
      d1.style.top = d1.offsetTop - gortsakits + "px";
      break;
    case "ArrowDown":
      d1.style.top = d1.offsetTop + gortsakits + "px";
      break;
    case "ArrowRight":
      d1.style.left = d1.offsetLeft + gortsakits + "px";
      break;
    case "ArrowLeft":
      d1.style.left = d1.offsetLeft - gortsakits + "px";
      break;
    default:
      if (!keyPresed.includes(e.key)) {
        keyPresed.push(e.key);
      }
      console.log(keyPresed);
      break;
  }
});
