//$(document).ready(function(){
//button even handlers
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playAgainBtn = document.getElementById('play-again')
//})
//scoring variables
let playerScore = 0; //starting score
let computerScore = 0; //starting score

// computer vs player rolls
let computerRoll; //store the computer roll 
let playerRoll; //store the player's roll



function computerPlay() {
    //will return Rock, Paper, or Scissors
    let random = Math.random() * 1;
    let roll;
    if (random < 0.3){
        roll = "rock";
    } else if (random < 0.6){
        roll = "paper";
    } else {
        roll = "scissors"
    }
    console.log("The computer has rolled " + roll);
   
    return roll; 
}

function playRound(playerSelection, computerSelection){
    computerRoll = computerPlay(); //stores result of computer's roll
    playerSelection = playerRoll
    computerSelection = computerRoll;
    console.log("The player has rolled " + playerRoll);
    let display;
    let whoWon; 
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        display = "You lose! Paper beats Rock";
        whoWon = "computer";
        computerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        display = "You lose! Scissors beats paper";
        whoWon = "computer";
        computerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        display = "You lose! Rock beats scissors";
        whoWon = "computer";
        computerScore++;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        display = "It's a tie!";
        whoWon = "No one";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        display = "You win! Rock beats scissors";
        whoWon = "player";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        display = "You win! Paper beats rock";
        whoWon = "player";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        display = "You win! Scissors beats paper";
        whoWon = "player";
        playerScore++;
    }
    console.log(display);   
    console.log("Player Score:" + playerScore + " Computer score: " + computerScore); 
    return whoWon;
}



   
//event handlers
rockBtn.addEventListener('click', () => {
    playerRoll = 'rock'
    playRound(playerRoll, computerRoll);
})
paperBtn.addEventListener('click', () => {
    playerRoll = 'paper'
    playRound(playerRoll, computerRoll);
})
scissorsBtn.addEventListener('click', () => {
    playerRoll = 'scissors'
    playRound(playerRoll, computerRoll);
})

playAgainBtn.addEventListener('click',() =>  {
    playerScore = 0
    computerScore = 0; 
    console.clear()
})

$('.game-score').append("Player Score: " + playerScore)

$('.game-score').append("Computer Score: " + computerScore)