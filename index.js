/* 
func computerPlay 
    randomly return rock, paper, scissors.
func playRound(playerSelection, computerSelection)
    playerSelection = prompt("rock, paper, or scissors: ")
    show rock > scissors > paper > rock
    winning message shows 
    let winning = `congrats! You win! ${playerSelection} beats ${computerSelection}`;
    let losing = `Aww, you lost! ${computerSelection} beat ${playerSelection}

    let rock = 6
    let scissors = 4
    let paper
    if (computerSelection = rock) {
        paper = 8
        else:
        paper = 0
    }

    if (playerSelection > computerSelection){
        return winning;
        else:
        return losing;
    }    
    add if statements
    return "win or lose statement" */

function computerPlay(){
    const optionsArray = ["rock", "paper", "scissors"];
    let randomSelection = Math.floor(Math.random() * optionsArray.length);
    let computerSelection = optionsArray[randomSelection];
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt("rock, paper, or scissors: ");
    const winning = `congrats! You win! ${playerSelection} beats ${computerSelection}`;
    const losing = `Aww, you lost! ${computerSelection} beat ${playerSelection}`;
    const rock = 6;
    const scissors = 4;
    let paper;

    if (computerSelection = rock) {
        paper = 8;
    }
        else {
            paper = 0;

        }

    if (playerSelection > computerSelection){
        return winning;
    }
        else {
            return losing;

        }
       
}

playRound();

