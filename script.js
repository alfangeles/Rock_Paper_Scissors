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

console.log(getComputerChoice());