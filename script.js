//Score
let playerScore = 0;
let computerScore = 0;

//Get a selection for player and loop until a valid one.

function getPlayerSelection() {
    let playerSelectionRaw;
    let playerSelection;
   
    while (true) {
        
        playerSelectionRaw = prompt("Rock, Paper or Scissors?").toLowerCase();
        playerSelection = playerSelectionRaw.charAt(0).toUpperCase() + playerSelectionRaw.slice(1);
        console.log(playerSelection);
        if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
            // i = 1;
            return playerSelection;
        }else {
            console.log("Not valid option");
        }  
    } 
}


// function called getComputerChoice that will randomly return either ‘Rock’,
// ‘Paper’ or ‘Scissors’. 


function getComputerChoice() {
    let ranNUm = Math.random();
    let computerChoiceNumeric = Math.floor(ranNUm * 3)+1; // random number betwen 1 an 3

    let computerChoice

    switch (computerChoiceNumeric) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice
}



// Function that play a single round of RP&S

function singleRound(computer, player) {

    console.log(`Computer played ${computer} and player is ${player}`)

    let roundResult;
    let youLose = "You Lose!"
    let youWin = "You are the Winner!"
    let isATie = "TIES play again"

    

    if (computer === "Rock") {
        switch (player) {
            case "Rock":
                roundResult = isATie;
                console.log("is a tie");
                break;
            case "Paper":
                roundResult = youWin;
                console.log("YOu win");
                playerScore += 1;
                break;
            case "Scissors":
                roundResult = youLose;
                console.log("YOu Lose");
                computerScore += 1;
                break;
        }

    } else if (computer === "Paper"){
        switch (player) {
            case "Rock":
                roundResult = youLose;
                console.log("player lose under a paper");
                computerScore += 1;
                break;
            case "Paper":
                roundResult = isATie;
                console.log("is a paper tie");
                break;
            case "Scissors":
                roundResult = youWin;
                console.log("cut and win")
                playerScore += 1;
                break;
        }
        
    } else {
        switch (player) {
            case "Rock":
                roundResult = youWin;
                console.log("Smash and win");
                playerScore += 1;
                break;
            case "Paper":
                roundResult = youLose;
                console.log("player is cut and lose");
                computerScore += 1;
                break;
            case "Scissors":
                roundResult = isATie;
                console.log("scissors tie");
                break;
        }
        
    }
}

//Write a NEW function called game().
//that keeps score and reports a winner or loser at the end.
//best of 5

function bestOfFive() {
    while (playerScore < 3 && computerScore < 3) {
     singleRound(getComputerChoice(), getPlayerSelection())
     console.log(`The score is: \n Player: ${playerScore} \n Computer: ${computerScore}`)   
    }

    if (playerScore == 3) {
        console.log("And the winner is: The player, 3 out of 5");
    } else {
        console.log("The computer win 3 out of 5")
    }
    

}

// Test Here

bestOfFive();