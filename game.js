// Initialize scores outside of the function to retain their values across multiple rounds
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    let randomNumber = Math.random() * 3; // Generate a random number between 0 and 3
    let choiceNumber = Math.floor(randomNumber); // Round down to get an integer between 0 and 2
    switch (choiceNumber) {
        case 0:
            return 'rock'; // Use lowercase for consistency
        case 1:
            return 'paper'; // Use lowercase for consistency
        case 2:
            return 'scissors'; // Use lowercase for consistency
    }
}

// Function to get the human's choice
function getHumanChoice() {
    let humanChoice = prompt("Select one Rock/Paper/Scissors!").toLowerCase(); // Convert user input to lowercase
    return humanChoice;
}

// Function to play a single round of Rock, Paper, Scissors
function playRound(humanSelection, computerSelection) {
    const choices = ['rock', 'paper', 'scissors']; // Define possible choices in lowercase

    // Check if humanSelection is a valid choice
    if (!choices.includes(humanSelection)) {
        console.log('Invalid choice! Please choose "rock", "paper", or "scissors".');
        return; // Exit the function if the choice is invalid
    }

    // Determine the outcome of the round
    if (humanSelection === computerSelection) {
        console.log("It's a tie!"); // Handle tie scenario
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`); // Handle win scenario
        humanScore += 1; // Increment human score
    } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`); // Handle loss scenario
        computerScore += 1; // Increment computer score
    }
}

// Function to play the game for a specified number of rounds
function playGame() {
    // Play 6 rounds of the game
    for (let i = 0; i < 6; i++) {
        let humanSelection = getHumanChoice(); // Get human choice for this round
        let computerSelection = getComputerChoice(); // Get computer choice for this round
        playRound(humanSelection, computerSelection); // Play the round
    }

    // Display the final score after all rounds
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

// Start the game
playGame();
