// function called getComputerChoice that will randomly return either ‘Rock’,
// ‘Paper’ or ‘Scissors’. 

function getComputerChoice() {
    let ranNUm = Math.random();
    let computerChoice = Math.floor(ranNUm * 3)+1;
    console.log(ranNUm);
    console.log(computerChoice);
}

console.log(getComputerChoice());