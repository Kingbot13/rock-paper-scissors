/* 
    store playerSelection as a variable 
    if statements to match up with possible options
*/

function computerPlay(){
    const optionsArray = ["rock", "paper", "scissors"];
    let randomSelection = Math.floor(Math.random() * optionsArray.length);
    let computerSelection = optionsArray[randomSelection];
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt("rock, paper, or scissors");
    const winning = `congrats! You win! ${playerSelection} beats ${computerSelection}`;
    const losing = `Aww, you lost! ${computerSelection} beat ${playerSelection}`;
    const tie = `It's a tie! ${playerSelection} = ${computerSelection}`;

    console.log(playerSelection);
    console.log(computerSelection);
    
    if (playerSelection === "rock"){
        playerSelection = 3;
    } else if (playerSelection === "scissors"){
        playerSelection = 2;
    } else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            playerSelection = 4;
        } else {
            playerSelection = 0;
        }
    }

    if (computerSelection === "rock"){
        computerSelection = 3;
    } else if (computerSelection === "scissors"){
        computerSelection = 2;
    } else if (computerSelection === "paper"){
        if (playerSelection === "rock"){
            computerSelection = 4;
        } else {
            computerSelection = 0;
        }
    }

    let results;

    if (playerSelection > computerSelection){
        results = winning;
    } else if (playerSelection == computerSelection) {
        results = tie;
    }
        else {
            results = losing;
        }
       
    console.log(results);
}

playRound();

