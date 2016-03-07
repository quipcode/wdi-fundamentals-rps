var answer = "no"

function getInput() {
    answer = prompt ("Please select 'rock', 'paper', or 'scissor'");
    return answer
}



var compValue = "why"

function randomPlay() {

    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return compValue = 'rock';
    } else if (randomNumber < 0.66) {
        return compValue = 'scissor';
    } else {
        return compValue = 'paper';
    }
}

randomPlay()

function getPlayerMove(move) {
    if (move === 'rock') {
        return 'rock'
    } else if (move === 'paper') {
        return 'paper'
    } else if(move === 'scissor') {
        return 'scissor'
    } else {
        return getInput();
    }

}


function getComputerMove(move) {
    if (move === 'rock') {
        return 'rock'
    } else if (move === 'paper') {
        return 'paper'
    } else if(move === 'scissor') {
        return 'scissor'
    } else {
        return randomPlay();
    }
}

function getWinner(playerMove, computerMove) {
    var winner = "why"
    if (playerMove === 'rock' && computerMove === "scissor") {
        winner = "Player";
    } else if (playerMove === 'rock' && computerMove === "paper") {
        winner = "Computer";
    } else if (playerMove === 'paper' && computerMove === "scissor") {
        winner = "Computer";
    } else if (playerMove === 'paper' && computerMove === "rock") {
        winner = "Player";
    } else if (playerMove === 'scissor' && computerMove === "rock") {
        winner = "Computer";
    } else if (playerMove === 'scissor' && computerMove === "paper") {
        winner = "Player";
    } else {
        return "Its a draw";
    }
    return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < 2) && (computerWins < 2)) {
        var win = getWinner(getPlayerMove(), getComputerMove())
        if (win === "Player") {
            playerWins += 1;
        } else if (win === "Computer") {
            computerWins += 1;
        }
        console.log([playerWins, computerWins]);
    }

}

playToFive();


