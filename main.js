const buttons = document.querySelectorAll('button');
const points = document.querySelector('#points');
const winner = document.querySelector('#winner');
const gamePoints = [0, 0];
updateGamePoints();

function updateGamePoints () {
    points.innerHTML = `
    The current puntuation is: <br>
    -Player: ${gamePoints[0]} <br>
    -CPU: ${gamePoints[1]}`;
}

function updatePoints (playerPoint) {
    winner.textContent = '';
    switch (playerPoint) {
        case 'player':
            gamePoints[0]++;
            updateGamePoints();
            if (gamePoints[0] === 5) {
                winner.textContent = 'The Player WINS!';
                gamePoints[0]= 0;
                gamePoints[1]= 0;
            }
            break;
        case 'cpu':
            gamePoints[1]++;
            updateGamePoints();
            if (gamePoints[1] === 5) {
                winner.textContent = 'The CPU WINS!';
                gamePoints[0]= 0;
                gamePoints[1]= 0;
            }
            break;
    }
}

function getComputerChoice() {
    const num= Math.floor(Math.random()*3);
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
                        updatePoints('cpu');
                        return 'You Lose! Paper beats Rock'
                    case 'SCISSORS':
                        updatePoints('player');
                        return 'You Win! Rock beats Scissors'
                }
            case 'PAPER':
                switch (computerChoise) {
                    case 'ROCK':
                        updatePoints('player');
                        return 'You Win! Paper beats Rock'
                    case 'SCISSORS':
                        updatePoints('cpu');
                        return 'You Lose! Scissors beats Paper'
                }
            case 'SCISSORS':
                switch (computerChoise) {
                    case 'ROCK':
                        updatePoints('cpu');
                        return 'You Lose! Rock beats Scissors'
                    case 'PAPER':
                        updatePoints('player');
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
