let button = document.querySelector('button');

function getComputerChoice() {
    let num= Math.floor(Math.random()*3);
    switch (num) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'Error!';
    }
}

function playRound(playerChoise, computerChoise) {
    playerChoise = playerChoise.toUpperCase();
    computerChoise = computerChoise.toUpperCase();
    if (playerChoise === computerChoise) {
        return 'Draw!'
    } else {
        switch (playerChoise) {
            case 'ROCK':
                switch (computerChoise) {
                    case 'PAPER':
                        return 'You Lose! Paper beats Rock'
                    case 'SCISSORS':
                        return 'You Win! Rock beats Scissors'
                }
            case 'PAPER':
                switch (computerChoise) {
                    case 'ROCK':
                        return 'You Win! Paper beats Rock'
                    case 'SCISSORS':
                        return 'You Lose! Scissors beats Paper'
                }
            case 'SCISSORS':
                switch (computerChoise) {
                    case 'ROCK':
                        return 'You Lose! Rock beats Scissors'
                    case 'PAPER':
                        return 'You Win! Scissors beats Paper'
                }
            default:
                return 'Error!';
        }
    }
}

function game () {
    for (let i= 1; i <= 5; i++) {
        let playerChoise = prompt('Player Selection: ');
        let computerChoise = getComputerChoice();
        console.log(playRound(playerChoise, computerChoise));
    }
}

button.addEventListener("click", game);