let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        wins: 0,
        draw: 0,
        loss: 0
    }
}

updateScore();

function playGame(parameter) {
    let result = '';
    computerMove = generationCompMove()
    if (parameter === "rock") {
        if (computerMove === 'rock') {
            result = 'You draw';
        }

        else if (computerMove === 'paper') {
            result = 'You loose';
        }

        else if (computerMove === 'scissors') {
            result = 'You win';
        }
    }

    else if (parameter === "paper") {
        if (computerMove === 'rock') {
            result = 'You win';
        }
        else if (computerMove === 'paper') {
            result = 'You draw';
        }
        else if (computerMove === 'scissors') {
            result = 'You loose';
        }
    }


    else if (parameter === "scissors") {

        if (computerMove === 'rock') {
            result = 'You loose';
        }
        else if (computerMove === 'paper') {
            result = 'You win';
        }
        else if (computerMove === 'scissors') {
            result = 'You draw';
        }
    }
    if (result === "You win") {
        score.wins += 1;
    }
    else if (result === 'You draw') {
        score.draw += 1;
    }
    else if (result === 'You loose') {
        score.loss += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScore();

    document.querySelector('.move').innerHTML = `Computer move was ${computerMove}`;

    document.querySelector('.result').innerHTML = result;


}

function generationCompMove() {
    let generation = Math.random();
    let computerMove = '';

    if (generation >= 0 && generation < 1 / 3) {
        return 'rock';
    }
    else if (generation >= 1 / 3 && generation < 2 / 3) {
        return 'paper';
    }
    else if (generation >= 2 / 3) {
        return 'scissors';
    }

}
function updateScore() {
    document.querySelector('.scoreDisplay').innerHTML = `wins : ${score.wins}, draws : ${score.draw}, loss : ${score.loss}`;
}
