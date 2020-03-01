let cells = document.querySelectorAll(".cell");
let button = document.querySelector("#btn");
let endgame = document.querySelector(".endgame");
let turnCounter = 0;
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

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (turnCounter % 2 === 0) {
      cell.textContent = "X";
    } else {
      cell.textContent = "O";
    }

    turnCounter++;

    checkWin();
  });
});

function check(mark) {
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

function cT(cell) {
  cell.target.id.removeEventListener("click", changeTurn);
  // the rest
}

function checkWin() {
  check("X");
  check("O");
}

button.addEventListener("click", () => {
  cells.forEach(cell => {
    cell.innerHTML = "";
    turnCounter = 0;
    endgame.style.display = "none";
  });
});

function declareWinner(mark) {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame .text").innerText = mark;
}
