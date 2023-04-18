let p = 0;
let c = 0;

const getComputerChoice = () => {
    const choices = [
        'rock',
        'paper',
        'scissor'
    ];
    const randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}

// console.log(getComputerChoice());

const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();


    if(player === "rock" && computer === "paper"){
        console.log("You lose! paper beats Rock!");
        c += 1;
    }
    else if(player === "rock" && computer === "scissor"){
        console.log("You Win! Rock beats Scissor");
        p += 1;
    }
    else if(player === "rock" && computer === "rock"){
        console.log("It's a tie!");
    }

    else if(player === "paper" && computer === "paper"){
        console.log("It's a tie!");
    }
    else if(player === "paper" && computer === "scissor"){
        console.log("You Lose! Scissor beats paper");
        c += 1;
    }
    else if(player === "paper" && computer === "rock"){
        console.log("You Win! paper beats rock!");
        p += 1;
    }

    else if(player === "scissor" && computer === "paper"){
        console.log("You Win! scissor beats paper");
        p += 1;
    }
    else if(player === "scissor" && computer === "scissor"){
        console.log("It's a tie!");
    }
    else if(player === "scissor" && computer === "rock"){
        console.log("You lose! rock beats scissor");
        c += 1;
    }

}

const game = () => {
    const playerChoice = prompt("Enter a value: ");

    const computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);
}


for(let i = 0; i<5; i++){
    game();
}
   

const winner = p>c ? "Player Wins!": p<c ? "Computer Wins": "it's a Draw!"

console.log(winner);
