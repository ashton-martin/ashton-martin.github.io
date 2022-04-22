// let computerRoll;
// let playerRoll;
let playerScore = 0; 
let computerScore = 0; 
let computerRoll = computerPlay();
let playerRoll = prompt("Rock, paper, or scissors?");

function computerPlay() {
    //will return Rock, Paper, or Scissors
    let random = Math.random() * 1;
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
    // computerRoll = computerPlay();
    // playerRoll = prompt("Rock, paper, or scissors?");
    console.log("The player has rolled " + playerRoll);
    var display;
    var whoWon; 
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


function game(){
    playRound(playerRoll, computerRoll);
    playRound(playerRoll, computerRoll);
    // for (var i = 0; i < 5; i++){
 
        // roundWinner();    
   //}
   
}
game();



