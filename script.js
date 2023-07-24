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

function getPlayerSelection() {
  const valueSelected = prompt("Please select Rock, Paper or Scissor");
  return !valueSelected ? "No selected" : valueSelected.toLowerCase();
}

function playRound(playerSelection, computerselection) {
  switch (playerSelection) {
    case "rock":
      return checkRock(computerselection);
    case "paper":
      return checkPaper(computerselection);
    case "scissor":
      return checkScissor(computerselection);
    default:
      return 9;
  }
}

function game() {
  let playerResult = 0;
  let computerResult = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(getPlayerSelection(), getComputerChoice());
    console.log(
      `Round ${i + 1} - player ${
        !result ? "Draw" : result === 1 ? "Win" : "Lose"
      }`
    );
    playerResult = result === 1 ? playerResult + 1 : playerResult;
    computerResult = result > 1 ? computerResult + 1 : computerResult;
  }

  if (playerResult > computerResult) {
    console.log("The player won. Congratulations.");
    return;
  }
  if (playerResult < computerResult) {
    console.log("The player lost. C'mon play again.");
    return;
  }
  console.log("The player draw. It was hard but try again.");
}
