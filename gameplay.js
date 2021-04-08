

function playerPlay(){
    let playerPrompt = prompt("Rock, paper, or scissors. What do you choose?");
    console.log(`Player chooses "${playerPrompt}"`);
    console.log(`Player altered "${playerPrompt.toLowerCase()}"`);

    while (playerPrompt.toLowerCase() != "rock" && playerPrompt.toLowerCase() != 
            "paper" && playerPrompt.toLowerCase() != "scissors"){
        console.log("Invalid choice. Choose again");
        alert("Invalid choice. Choose again");
        playerPrompt = prompt("Rock, paper, or scissors. What do you choose?");
    };

    return playerPrompt;
}

function computerPlay(){
    let choice = Math.floor(Math.random() * 3);

    switch (choice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    //normalize input 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //If player plays ROCK
    if (playerSelection == "rock"){
        //Compare to computer's selection for winner
        if (computerSelection == "rock"){
            document.getElementById("roundResult").textContent = "Tie!";
            return;
        } else if (computerSelection == "paper"){
            let currentScore = document.getElementById("compScore").textContent;
            document.getElementById("compScore").textContent = currentScore +1;
            document.getElementById("roundResult").textContent = "Paper beats Rock. You lose this round!";
            return;
        } else if (computerSelection == "scissors"){
            let currentScore = document.getElementById("playerScore").textContent;
            document.getElementById("playerScore").textContent = currentScore +1;
            document.getElementById("roundResult").textContent = "Rock beats Scissors. You win this round!";
            return;
        }
    } //If player plays PAPER 
    else if (playerSelection == "paper"){
        //Compare to computer's selection for winner
        if (computerSelection == "rock"){
            let currentScore = document.getElementById("playerScore").textContent;
            document.getElementById("playerScore").textContent = currentScore +1;
            document.getElementById("roundResult").textContent = "Paper beats Rock. You win this round!";
            return;
        } else if (computerSelection == "paper"){
            document.getElementById("roundResult").textContent = "Tie!";
            return;
        } else if (computerSelection == "scissors"){
            let currentScore = document.getElementById("compScore").textContent;
            document.getElementById("compScore").textContent = currentScore +1;
            document.getElementById("roundResult").textContent = "Scissors beats Paper. You lose this round!";
            return;
        }
    }//If player plays SCISSORS 
    else if (playerSelection == "scissors"){
        //Compare to computer's selection for winner
        if (computerSelection == "rock"){
            let currentScore = document.getElementById("compScore").textContent;
            document.getElementById("compScore").textContent = currentScore +1;
            document.getElementById("roundResult").textContent = "Rock beats Scissors. You lose this round!";
            return;
        } else if (computerSelection == "paper"){
            let currentScore = document.getElementById("playerScore").textContent;
            document.getElementById("playerScore").textContent = currentScore +1;
            document.getElementById("roundResult").textContent = "Scissors beats Paper. You win this round!";
            return;
        } else if (computerSelection == "scissors"){
            document.getElementById("roundResult").textContent = "Tie!";
            return;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let whoWon = "";
    let computerChoice = "";
    let playerChoice = "";

    document.getElementById("rockBtn").addEventListener("click", () => {
        playRound("rock", computerPlay());
    });

    document.getElementById("paperBtn").addEventListener("click", () => {
        playRound("paper", computerPlay());
    });

    document.getElementById("scissorsBtn").addEventListener("click", () => {
        playRound("scissors", computerPlay());
    });

    /*for(let i = 0; i < 5; i++){
        console.log(`Round ${i+1}`);
        alert(`Round ${i+1}`);
        
        playerChoice = playerPlay();
        computerChoice = computerPlay();
        
        console.log("player: " + playerChoice + "   computer: " + computerChoice);
        whoWon = playRound(playerChoice, computerChoice);*/

        if (whoWon == "computer"){
            computerScore++;
            console.log(`You lose this round! ${computerChoice} beats ${playerChoice}!`);
            alert(`You lose this round! ${computerChoice} beats ${playerChoice}!`);
        } else if (whoWon == "player") {
            playerScore++;
            console.log(`You win this round! ${playerChoice} beats ${computerChoice}!`);
            alert(`You win this round! ${playerChoice} beats ${computerChoice}!`);
        } else {
            console.log("Tie!");
            alert("Tie!");
        }
    //}

    if (playerScore > computerScore){
        console.log(`You won! The score was ${playerScore} to ${computerScore}.`);
        alert(`You won! The score was ${playerScore} to ${computerScore}.`);
    } else if (computerScore > playerScore){
        console.log(`You lost! The score was ${computerScore} to ${playerScore}.`);
        alert(`You lost! The score was ${computerScore} to ${playerScore}.`);
    }
}