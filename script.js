const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = "tie";
const USER_WIN = "win";
const USER_LOSE = "lose";

const WIN_CONDITIONS = [`${ROCK}v${SCISSORS}`, `${PAPER}v${ROCK}`, `${SCISSORS}v${PAPER}`]

const options = [ROCK, PAPER, SCISSORS];

var continuePlaying = true;

// const button = document.querySelector('#rock');
// button.addEventListener('click', updateButton);

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
    let currCombo = `${userSelection}v${computerSelection}`;
    if (userSelection == computerSelection) {
        console.log("T");
        return TIE;
    } else if (WIN_CONDITIONS.includes(currCombo)) {
        console.log("W");
        return USER_WIN;
    } else {
        console.log("L");
        return USER_LOSE;
    }
}

function updateButton() {
    switch (true) {
        case (button.value == ROCK):
            playRound(ROCK, computerPlay);
            break;
        case (button.value == PAPER):
            playRound(PAPER, computerPlay);
            break;
        case (button.value == SCISSORS):
            playRound(PAPER, computerPlay);
            break;
    }
}

function game() {
    let user_wins = 0;
    let computer_wins = 0;
    while (continuePlaying) {
        let userSelection = prompt("What's it gunna be, punk?");
        let result = playRound(userSelection, computerPlay());
        if (result == USER_WIN) {
            user_wins++;
            console.log(`You've won ${user_wins} rounds!`);
        } else if (result == USER_LOSE) {
            computer_wins++;
            console.log(`You've lost ${computer_wins} rounds!`);
        }
        if (user_wins == 5 || computer_wins == 5) {
            continuePlaying = false;
        }
    }
}

game();

counter();
console.log(playRound(ROCK, computerPlay()));