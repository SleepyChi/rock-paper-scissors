function computerPlay(){
    //Randomly generate num between 0-2
    let choice = Math.floor(Math.random() * 3);

    //Return computer's play based on choice generated
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
            return "Tie!";
        } else if (computerSelection == "paper"){
            return "You Lose! Paper beats Rock!";
        } else if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissors!";
        }
    } //If player plays PAPER 
    else if (playerSelection == "paper"){
        //Compare to computer's selection for winner
        if (computerSelection == "rock"){
            return "You Win! Paper beats Rock!";
        } else if (computerSelection == "paper"){
            return "Tie!";
        } else if (computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper!";
        }
    }//If player plays SCISSORS 
    else if (playerSelection == "scissors"){
        //Compare to computer's selection for winner
        if (computerSelection == "rock"){
            return "You Lose! Rock beats Scissors!";
        } else if (computerSelection == "paper"){
            return "You Win! Scissors beats Paper!";
        } else if (computerSelection == "scissors"){
            return "Tie!";
        }
    }
}

function game(){
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log("player: " + playerSelection + "   computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));