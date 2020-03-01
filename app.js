const cells = document.querySelectorAll(".cell");
let turnCounter = 0;
let endgame = document.querySelector(".endgame");
let winCombos = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[2], cells[4], cells[6]],
  [cells[0], cells[4], cells[8]]
];

function reset() {
  cells.forEach(cell => {
    cell.innerHTML = "";
    endgame.style.display = "none";
    turnCounter = 0;
  });

  cells.forEach(cell => {
    cell.removeEventListener("click", onClick);
  });

  cells.forEach(cell => {
    cell.addEventListener("click", onClick);
  });
}

function onClick(event) {
  if (turnCounter % 2 === 0) {
    event.target.textContent = "X";
    checkWin("X");
  } else {
    event.target.textContent = "O";
    checkWin("O");
  }
  turnCounter++;
  event.target.removeEventListener("click", onClick);
}

function checkWin(mark) {
  winCombos.forEach(combo => {
    let sum = 0;
    combo.forEach(c => {
      if (c.textContent === mark) {
        sum++;
      }

      if (sum === 3) {
        declareWinner(mark + " Wins!");
        return;
      }
    });
  });
}

document.querySelector("#btn").addEventListener("click", reset);
reset();

function declareWinner(mark) {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = mark;
}
