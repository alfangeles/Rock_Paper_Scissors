let playerSelection = prompt("Rock, Paper or Scissors?");

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
                console.log("is a tie")
                break;
            case "Paper":
                roundResult = youWin;
                console.log("YOu win")
                break;
            case "Scissors":
                roundResult = youLose;
                console.log("YOu Lose")
                break;
        }

    } else if (computer === "Paper"){
        switch (player) {
            case "Rock":
                roundResult = youLose;
                console.log("player lose under a paper")
                break;
            case "Paper":
                roundResult = isATie;
                console.log("is a paper tie")
                break;
            case "Scissors":
                roundResult = youWin;
                console.log("cut and win")
                break;
        }
        
    } else {
        switch (player) {
            case "Rock":
                roundResult = youWin;
                console.log("Smash and win")
                break;
            case "Paper":
                roundResult = youLose;
                console.log("player is cut and lose")
                break;
            case "Scissors":
                roundResult = isATie;
                console.log("scissors tie")
                break;
        }
        
    }
}

// Text Here



console.log(singleRound(getComputerChoice(), playerSelection));