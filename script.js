const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = [rock, paper, scissors];
const humanScoreDiplay = document.querySelector(".player-score");
const computerScoreDiplay = document.querySelector(".computer-score");

let humanScore = 0;
let computerScore = 0;
function aiGame() {
  return choices[Math.floor(Math.random() * choices.length)].dataset.choice;
}

function game(choice) {
  return choice;
}
console.log(choices);
function playingGame() {
  choices.forEach((choice) => {
    choice.addEventListener("click", function (e) {
      console.log(e.target.parentNode);
      if (choices.includes(e.target.parentNode)) {
        const humanChoice = game(e.target.parentNode.dataset.choice);
        const computerChoice = aiGame();
        if (
          (humanChoice === "rock" && computerChoice === "paper") ||
          (humanChoice === "paper" && computerChoice === "scissors") ||
          (humanChoice === "scissors" && computerChoice === "rock")
        ) {
          computerScore++;
          computerScoreDiplay.innerText = computerScore;
          console.log(`Computer wins !!!`);
        } else if (
          (humanChoice === "rock" && computerChoice === "rock") ||
          (humanChoice === "paper" && computerChoice === "paper") ||
          (humanChoice === "scissors" && computerChoice === "scissors")
        ) {
          console.log(`DRAW`);
        } else {
          humanScore++;
          humanScoreDiplay.innerText = humanScore;

          console.log(`You Win !!!`);
        }
      }
    });
  });
}
playingGame();
