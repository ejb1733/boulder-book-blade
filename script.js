const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = "TIED";
const USER_WIN = "WON";
const USER_LOSE = "LOST";

const WIN_CONDITIONS = [`${ROCK}v${SCISSORS}`, `${PAPER}v${ROCK}`, `${SCISSORS}v${PAPER}`]

const options = [ROCK, PAPER, SCISSORS];

const results = document.querySelector('.results');
const buttondiv = document.querySelector('.buttons');
const body = document.querySelector('body');
const footer = document.querySelector('.footer');

let wins = 0;
let losses = 0;
let finalResult = '';

let rockbtn = document.querySelector('#rock');
let paperbtn = document.querySelector('#paper');
let scissorsbtn = document.querySelector('#scissors');

results.innerText = `Choose your move... carefully!

WINS: ${wins} 
LOSSES: ${losses}`;

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

// EFFECTS: log number of rock, paper, and scissor
//          selected by computer after n trials
function counter() {
    let rockCounter, paperCounter, scissorsCounter;
    rockCounter = paperCounter = scissorsCounter = 0;
    for (var n = 0; n < 600; n++) {
        let ans = computerPlay();
        switch (true) {
            case (ans == ROCK):
                rockCounter++;
                break;
            case (ans == PAPER):
                paperCounter++;
                break;
            case (ans == SCISSORS):
                scissorsCounter++;
                break;
        }
    }
    let sum = rockCounter + paperCounter + scissorsCounter;
    
    console.log("Results of computerPlay() after n = " + n + " trials: \n"
     + "\nRocks: " + rockCounter + ` (${rockCounter/sum*100} %)`
     + "\nPapers: " + paperCounter + ` (${paperCounter/sum*100} %)`
     + "\nScissors: " + scissorsCounter + ` (${scissorsCounter/sum*100} %)`);
}

// EFFECTS: plays the user's selection against the computer's selection,
//          returns the result of the round
function playRound(userSelection, computerSelection) {
    let result = null;
    let currCombo = `${userSelection}v${computerSelection}`;
    if (userSelection == computerSelection) {
        result = TIE;
    } else if (WIN_CONDITIONS.includes(currCombo)) {
        result = USER_WIN;
        wins++;
    } else {
        result = USER_LOSE;
        losses++;
    }
    results.innerText = `Your ${userSelection} ${result} versus ${computerSelection} 

    WINS: ${wins} 
    LOSSES: ${losses}`;
    isGameOver();
    return result;
}

// EFFECTS: check if game over, if so, set appropriate text for winner
var isGameOver = () => {
    if (wins == 5 || losses == 5) {
        let resultDiv = document.createElement('p');
        let victoryGif = document.createElement('img');
        resultDiv.setAttribute('id', 'result');
        if (wins > losses) {
            finalResult = 'You beat the computer - nice work!';
            resultDiv.setAttribute('style', 'color:cadetblue');
            victoryGif.setAttribute('src', './gifs/giphy.gif');
        } else {
            finalResult = 'The computer won - oh no!';
            resultDiv.setAttribute('style', 'color:crimson');
        }
        resultDiv.innerText = finalResult;
        
        gameOver(resultDiv, victoryGif);
    }
}

// EFFECTS: set page to game over state & display winning text
var gameOver = function(resultDiv, gif) {
    btn = document.createElement('button');
    for (let i = 0; i < gbArray.length; i++) {
        gbArray[i].remove();
    }
    btn.addEventListener('click', () => {
        resetGame(gif);
        btn.remove();
    })
    btn.className = 'restartbtn';
    btn.innerHTML = 'click to restart';
    footer.appendChild(btn);
    buttondiv.prepend(resultDiv);
    footer.append(gif);
}

// EFFECTS: resets game to default state
var resetGame = function(gif) {
    wins = 0;
    losses = 0;
    console.log('reset');
    results.innerText = `Choose your move... carefully!

WINS: ${wins} 
LOSSES: ${losses}`;
buttondiv.prepend(rockbtn, paperbtn, scissorsbtn);
finalResult = '';
let toRemove = document.querySelector('#result');
toRemove.remove();
gif.remove();
}

let gbArray = Array.from(document.querySelectorAll('.gb'));
for (let i = 0; i < 3; i++) {
    gbArray[i].addEventListener('click', () => {
        playRound(gbArray[i].id, computerPlay());
    })
}

counter();