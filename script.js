// set initial values for the game
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let targetScore = 5;

const roundScore = document.querySelector("#roundScore");
const finalScore = document.querySelector("#finalScore");
const play = document.querySelector("#player");
const comp = document.querySelector("#computer");

const rockbtn = document.querySelector('#rock'); // replace 'button' with the selector of your specific button element
rockbtn.classList.add("PlayButtons");

const paperbtn = document.querySelector('#paper'); // replace 'button' with the selector of your specific button element
paperbtn.classList.add("PlayButtons");

const scissorbtn = document.querySelector('#scissor'); // replace 'button' with the selector of your specific button element
scissorbtn.classList.add("PlayButtons");

// new game button
const newGameBtn = document.querySelector("#newGame");
newGameBtn.classList.add("newGameButton");

// console.log(rockbtn);
// console.log(paperbtn);
// console.log(scissorbtn);

const getComputerChoice = () => {
    const choices = [
        'rock',
        'paper',
        'scissor'
    ];
    const randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}


rockbtn.addEventListener("click", function(){
    if(!isGameOver){
        playRound("rock",getComputerChoice());
        endGame();
    }
});

paperbtn.addEventListener("click", function(){
    if(!isGameOver){
        playRound("paper",getComputerChoice());
        endGame();
    }
});

scissorbtn.addEventListener("click", function(){
    if(!isGameOver){
        playRound("scissor",getComputerChoice());
        endGame();
    }
});


// rockbtn.addEventListener('click', () => {
//     const computerSelection = getComputerChoice();
//     const playerSelection = 'rock';
//     playRound(playerSelection, computerSelection);
// })

// paperbtn.addEventListener('click', () => {
//     const computerSelection = getComputerChoice();
//     const playerSelection = 'paper';
//     playRound(playerSelection, computerSelection);
// })

// scissorbtn.addEventListener('click', () => {
//     const computerSelection = getComputerChoice();
//     const playerSelection = 'scissor';
//     playRound(playerSelection, computerSelection);
// })


newGameBtn.addEventListener("click", function(){
    isGameOver = false;
    playerScore = 0;
    computerScore = 0;
    roundScore.innerText = "";
    play.innerText = "0";
    comp.innerText = "0";
    finalScore.innerText = "";
    play.classList.remove("winner", "loser");
    comp.classList.remove("winner", "loser");

})

const playRound = (playerSelection, computerSelection) => {
    const newLi = document.createElement("li");
    newLi.classList.add("newLi");
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    //console.log('Player: ', player, 'Computer: ', computer);

    if((player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissor") ||
    (player === "scissor" && computer === "rock")){
        newLi.innerText = `You lose! ${computer} beats ${player}`;
        roundScore.appendChild(newLi);
        computerScore += 1;
        comp.innerText = computerScore;

    }
    else if((player === "rock" && computer === "scissor") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")){
        newLi.innerText = `You Win! ${player} beats ${computer}`;
        roundScore.appendChild(newLi);
        playerScore += 1;
        play.innerText = playerScore;
    }
    else if(player===computer) {
        newLi.innerText = `You chose ${player} and the computer chose ${computer}. That's a tie!`;
        roundScore.appendChild(newLi);
    }
}


// const game = () => {
//     // const playerChoice = [rockbtn, paperbtn, scissorbtn];
//     // playerChoice.forEach(choice => {
//     //     choice.addEventListener('click', () => {
//     //         const computerChoice = getComputerChoice();
//     //         playRound(playerChoice, computerChoice);
//     //     })
//     // })
//     // const computerChoice = getComputerChoice();

//     // playRound(playerChoice, computerChoice);
// }

// game();
// for(let i = 0; i<5; i++){
//     game();
// }
   

// const winner = p>c ? "Player Wins!": p<c ? "Computer Wins": "it's a Draw!"

// console.log(winner);

function endGame(){
    if(playerScore === targetScore || computerScore === targetScore){
        isGameOver = true;
        if(playerScore === targetScore){
            finalScore.innerText = "you're the winner!";
            play.classList.add("winner");
            comp.classList.add("loser");
        }

        else if (computerScore === targetScore) {
            finalScore.innerText = "You lost the game.";
            comp.classList.add("winner");
            play.classList.add("loser");
          }
    }
}