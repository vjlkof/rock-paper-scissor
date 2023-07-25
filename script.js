function checkRock(computerselection) {
  if (computerselection === "rock") {
    return 0;
  }
  if (computerselection === "scissor") {
    return 1;
  }
  if (computerselection === "paper") {
    return 2;
  }
  return 9;
}

function checkPaper(computerselection) {
  if (computerselection === "rock") {
    return 1;
  }
  if (computerselection === "scissor") {
    return 2;
  }
  if (computerselection === "paper") {
    return 0;
  }
  return 9;
}

function checkScissor(computerselection) {
  if (computerselection === "rock") {
    return 2;
  }
  if (computerselection === "scissor") {
    return 0;
  }
  if (computerselection === "paper") {
    return 1;
  }
  return 9;
}

function getComputerChoice() {
  const option = Math.random() * 10;
  if (option <= 3.33) {
    return "rock";
  }
  if (option < 6.66) {
    return "paper";
  }
  if (option < 10) {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      return checkRock(computerSelection);
    case "paper":
      return checkPaper(computerSelection);
    case "scissor":
      return checkScissor(computerSelection);
    default:
      return 9;
  }
}

let playerResult = 0;
let computerResult = 0;
let round = 1;
let message = null;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");

rockButton.onclick = (event) => gameRound(event);
paperButton.onclick = (event) => gameRound(event);
scissorButton.onclick = (event) => gameRound(event);

function gameRound(event) {
  let result = playRound(event.target.name, getComputerChoice());
  divResult = document.createElement("div");
  divResult.className = "round-result";
  divResult.textContent = `Round ${round} - player ${
    !result ? "Draw" : result === 1 ? "Win" : "Lose"
  }`;
  document.body.append(divResult);
  playerResult = result === 1 ? playerResult + 1 : playerResult;
  computerResult = result > 1 ? computerResult + 1 : computerResult;

  if (playerResult > 4) {
    message = "You won. Congratulations.";
  }
  if (computerResult > 4) {
    message = "You lost. C'mon play again.";
  }

  if (message) {
    divFinalResult = document.createElement("div");
    divFinalResult.textContent = message;
    divFinalResult.className = "final-result";
    document.body.append(divFinalResult);
    let playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.className = "play-again";
    playAgainButton.onclick = playAgain;
    document.body.append(playAgainButton);
    rockButton.setAttribute("disabled", "");
    paperButton.setAttribute("disabled", "");
    scissorButton.setAttribute("disabled", "");
  }

  round += 1;
}

function playAgain() {
  playerResult = 0;
  computerResult = 0;
  round = 1;
  message = null;

  divFinalResult = document.getElementsByClassName("final-result")[0];
  divFinalResult.remove();
  buttonPlayAgain = document.getElementsByClassName("play-again")[0];
  buttonPlayAgain.remove();
  divResults = document.querySelectorAll('div[class="round-result"]');
  divResults.forEach((divResult) => divResult.remove());
  rockButton.removeAttribute("disabled");
  paperButton.removeAttribute("disabled");
  scissorButton.removeAttribute("disabled");
}
