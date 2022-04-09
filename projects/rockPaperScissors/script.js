var computerRoll = computerPlay();
var playerRoll = prompt("Rock, paper, or scissors?");
console.log("The player has rolled " + playerRoll);

function computerPlay() {
    //will return Rock, Paper, or Scissors
    var random = Math.random() * 1;
    var roll;
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
    var display;
    var whoWon; 
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        display = "You lose! Paper beats Rock";
        whoWon = "computer";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        display = "You lose! Scissors beats paper";
        whoWon = "computer";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        display = "You lose! Rock beats scissors";
        whoWon = "computer";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() == "paper") || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "scissors")){
        display = "It's a tie!";
        whoWon = "Noone";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        display = "You win! Rock beats scissors";
        whoWon = "player";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        display = "You win! Paper beats rock";
        whoWon = "player";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        display = "You win! Scissors beats paper";
        whoWon = "player";
    }
    console.log(display);
    return whoWon;
}

function rollAgain(){
  computerRoll = computerPlay();
  playerRoll = prompt("Rock, paper, scissors?");
  playRound(playerRoll, computerRoll);
}

function game(){
    var playerScore = 0; 
    var computerScore = 0; 
    for (var i = 0; i < 5; i++){
      
        if (playRound(playerRoll, computerRoll) === "player"){
            playerScore++;
           // rollAgain();
        } else if (playRound(playerRoll, computerRoll) === "computer") {
            computerScore++;
           // rollAgain();
        } else {
           rollAgain();
        }
      rollAgain();
    }
    console.log(playerScore);
     console.log(computerScore);
    return playerScore;
}
game();

// console.log(playRound(playerSelection ,computerSelection));

