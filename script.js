const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = "tie";
const USER_WIN = "win";
const USER_LOSE = "lose";

const WIN_CONDITIONS = [`${ROCK}v${SCISSORS}`, `${PAPER}v${ROCK}`, `${SCISSORS}v${PAPER}`]

const options = [ROCK, PAPER, SCISSORS];

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
    
    console.log("Rocks: " + rockCounter + ` (${rockCounter/sum*100} %)`
     + "\nPapers: " + paperCounter + ` (${paperCounter/sum*100} %)`
     + "\nScissors: " + scissorsCounter + ` (${scissorsCounter/sum*100} %)`);
}

// EFFECTS: plays the user's selection against the computer's selection,
//          returns the result of the round
function play(userSelection, computerSelection) {
    let currCombo = `${userSelection}v${computerSelection}`;
    if (userSelection == computerSelection) {
        return TIE;
    } else if (WIN_CONDITIONS.includes(currCombo)) {
        return USER_WIN;
    } else {
        return USER_LOSE;
    }
}

counter();
console.log(play(ROCK, computerPlay()));