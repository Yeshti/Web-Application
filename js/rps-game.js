const choices = ["rock", "paper", "scissors"];
let wins = 0, losses = 0, ties = 0;

const resultMsg = document.getElementById("result-message");
const winEl = document.getElementById("wins");
const lossEl = document.getElementById("losses");
const tieEl = document.getElementById("ties");
const buttons = document.querySelectorAll(".rps-btn");
const resetBtn = document.getElementById("reset-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    playRound(playerChoice, computerChoice);
  });
});

resetBtn.addEventListener("click", () => {
  wins = losses = ties = 0;
  updateScoreboard();
  resultMsg.textContent = "Make your move!";
});

function playRound(player, computer) {
  if (player === computer) {
    ties++;
    resultMsg.textContent = `Tie! Both chose ${player}.`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    wins++;
    resultMsg.textContent = `You win! ${player} beats ${computer}.`;
  } else {
    losses++;
    resultMsg.textContent = `You lose! ${computer} beats ${player}.`;
  }
  updateScoreboard();
}

function updateScoreboard() {
  winEl.textContent = wins;
  lossEl.textContent = losses;
  tieEl.textContent = ties;
}
