import { createGame, openCell, toggleFlag } from "./script.js";
import { isLoesed, data, timerss } from "./utils.js";

const { rows, cols, bombs, timerID, timers, changeDate } = data;
const startGame = document.querySelector("#start");

// Game border events
game.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (isLoesed()) return;
  if (event.target.classList.contains("cell")) {
    toggleFlag(event.target);
  }
});

game.addEventListener("click", (event) => {
  event.preventDefault();
  if (isLoesed()) return;
  if (event.target.classList.contains("cell")) {
    openCell(event.target);
  }
});

game.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("cell")) {
    startGame.innerHTML = "😮";
  }
});
document.addEventListener("mouseup", (event) => {
  startGame.innerHTML = "😀";
  if (event.target.getAttribute("mines")) {
    startGame.innerHTML = "☠";
  }
});

// game controller events
const gameModeAction = (rows, cols, bombs) => {
  clearInterval(timerID);
  createGame(rows, cols, bombs);
  game.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
  game.style.gridTemplateRows = `repeat(${rows}, 50px)`;
};

const beginner = document.querySelector("#beginner");
beginner.addEventListener("click", () => {
  gameModeAction(5, 5, 7);
  return (changeDate("timers", 0));
});

const intermediate = document.querySelector("#intermediate");
intermediate.addEventListener("click", () => {
  gameModeAction(8, 8, 12);
  return (timers = 0);
});

const expert = document.querySelector("#expert");
expert.addEventListener("click", () => {
  gameModeAction(8, 16, 20);
  return (changeDate("timers", 0));
});

startGame.addEventListener("click", () => {
  clearInterval(timerID);
  createGame(rows, cols, bombs);
  return (changeDate("timers", 0));
});
