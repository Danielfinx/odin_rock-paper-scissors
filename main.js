let buttons = document.querySelectorAll('button');

function getComputerChoice() {
    let num= Math.floor(Math.random()*3);
    switch (num) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
        default:
            return 'Error!';
    }
}

function playRound(playerChoise, computerChoise) {
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

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const computer = getComputerChoice();
        const result = document.querySelector('#resultText');
        switch (btn.id) {
            case 'rockBtn':
                result.textContent = playRound('ROCK', computer);
                break;
            case 'paperBtn':
                result.textContent = playRound('PAPER', computer);
                break;
            case 'scissorsBtn':
                result.textContent = playRound('SCISSORS', computer);
                break;
            default:
                result.textContent = 'ERROR!';
                break;
        }
    });
});
