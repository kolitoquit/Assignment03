// get user's choice
const userChoice = prompt("Do you choose rock, paper, or scissors?");
//const userChoice = "scissors"

// get computer's choice
let computerChoice = Math.random();

if (computerChoice < 1/3) {
  computerChoice = "rock";
} else if (computerChoice <= 2/3) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

console.log("Computer: " + computerChoice);

// determine the winner
const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
};

alert(determineWinner(userChoice, computerChoice));