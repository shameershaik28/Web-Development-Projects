// Output a welcome message to the console.
console.log('Hi, Welcome to the Rock, Paper, or Scissors Game.');

// Function to get the user's choice. It converts the input to lowercase and checks if it's valid.
const getUserChoice = userInput => {
  // Convert userInput to lowercase.
  userInput = userInput.toLowerCase();
  // Check if userInput is either 'rock', 'paper', or 'scissors'.
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput; // Return the valid userInput.
  } else {
    // Output an error message if userInput is invalid.
    console.log('Do you not know how to play rock paper scissors?');
  }
}

// Function to get the computer's choice.
function getComputerChoice() {
  // Generate a random number between 0 and 2.
  let randNum = Math.floor(Math.random() * 3);
  // Array of possible choices.
  const rps = ['rock', 'paper', 'scissors'];
  // Select the computer's choice based on the random number.
  let computerChoice = rps[randNum];
  return computerChoice; // Return the computer's choice.
}

// Call getComputerChoice to see it in action.
getComputerChoice();

// Function to determine the winner of the game.
function determineWinner(userInput, computerChoice) {
  // Check for a tie.
  if (userInput === computerChoice) {
    return "The game was a tie.";
  }
  // Check if the user chose 'rock'.
  if (userInput === 'rock') {
    // If the computer chose 'paper', the computer wins.
    if (computerChoice === 'paper') {
      return "The computer won.";
    } else {
      // Otherwise, the user wins.
      return "You won.";
    }
  }
  // Check if the user chose 'paper'.
  if (userInput === 'paper') {
    // If the computer chose 'scissors', the computer wins.
    if (computerChoice === 'scissors') {
      return "The computer won.";
    } else {
      // Otherwise, the user wins.
      return "You won.";
    }
  }
  // Check if the user chose 'scissors'.
  if (userInput === 'scissors') {
    // If the computer chose 'rock', the computer wins.
    if (computerChoice === 'rock') {
      return "The computer won.";
    } else {
      // Otherwise, the user wins.
      return "You won.";
    }
  }
}

// Function to play the game.
function playGame() {
  // Get the user's choice.
  let userInput = getUserChoice('rock');
  // Output the user's choice to the console.
  console.log(userInput);
  // Get the computer's choice.
  let computerChoice = getComputerChoice();
  // Output the computer's choice to the console.
  console.log(computerChoice);
  // Determine and output the winner to the console.
  console.log(determineWinner(userInput, computerChoice));
}

// Call playGame to start the game.
playGame();
