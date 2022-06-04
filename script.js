const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = "TIED";
const USER_WIN = "WON";
const USER_LOSE = "LOST";

const WIN_CONDITIONS = [`${ROCK}v${SCISSORS}`, `${PAPER}v${ROCK}`, `${SCISSORS}v${PAPER}`]

const options = [ROCK, PAPER, SCISSORS];

var continuePlaying = true;

const results = document.querySelector('.results');
const buttondiv = document.querySelector('.buttons');
const body = document.querySelector('body');

let wins = 0;
let losses = 0;

let rockbtn = document.querySelector('#rock');
let paperbtn = document.querySelector('#paper');
let scissorsbtn = document.querySelector('#scissors');

let resbtn = document.querySelector('#resbtn');

results.innerText = `

WINS: ${wins} 
LOSSES: ${losses}`;

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

// EFFECTS: logs the number of rocks, papers, and scissors
//          selected by the computer after i trials
function counter() {
    let rockCounter, paperCounter, scissorsCounter;
    rockCounter = paperCounter = scissorsCounter = 0;
    for (var i = 0; i < 600; i++) {
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
    
    console.log("Results of computerPlay() after n = " + i + " trials: \n"
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
    game();
    console.log(`Your ${userSelection} ${result} versus ${computerSelection}!`);
    return result;
}

// var isGameOver = () => {
//     return (wins == 5 || losses == 5);
// }

var game = () => {
    if (wins == 5 || losses == 5) {

        btn = document.createElement('button');
        for (let i = 0; i < gbArray.length; i++) {
            gbArray[i].remove();
        }
        btn.addEventListener('click', () => {
            resetGame();
            btn.remove();
            resbtn.style.display == 'none';
        })
        btn.className = 'restartbtn';
        btn.innerHTML = 'click to restart';
        // resbtn.style.display = 'block';
        body.appendChild(btn);
    }
}

var resetGame = function() {
    wins = 0;
    losses = 0;
    console.log('reset');
    results.innerText = `

WINS: ${wins} 
LOSSES: ${losses}`;
buttondiv.prepend(rockbtn, paperbtn, scissorsbtn);
}

let gbArray = Array.from(document.querySelectorAll('.gb'));
for (let i = 0; i < 3; i++) {
    gbArray[i].addEventListener('click', () => {
        playRound(gbArray[i].id, computerPlay());
        // displayBtns();
        // if (!isGameOver()) {
        // hideBtn(gbArray[i]);
        // }
    })
}

// function myFunction() {
//     console.log(resbtn);
//     if (resbtn.style.display == 'none') {
//         resbtn.style.display = 'block';
//     } else {
//         resbtn.style.display = 'none';
//     }
// }

// let displayBtns = () => {
//     for (let i = 0; i < gbArray.length; i++) {
//         gbArray[i].style.display = 'block';
//     }
// }

// let hideBtn = function(btn) {
//     btn.removeEventListener('click', (e));
//     let ogBorderColor = btn.style.borderColor;
//     console.log(ogBorderColor);
//     btn.style.backgroundColor = 'white';
//     btn.style.borderColor = 'white';
//     btn.style.color = 'white';
// }

counter();