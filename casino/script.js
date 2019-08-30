const MIN_VALUE = 0;
const MAX_VALUE = 10;
const CORRECT_ANSWER_POINTS = 10;
const INCORRECT_ANSWER_POINTS = 0;



function play(points){
    points = points || 0;

    const userNumber = getUserNumber(MIN_VALUE, MAX_VALUE);
    const randonNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);

    points += isAnswerCorrect(userNumber, randonNumber) ? CORRECT_ANSWER_POINTS : INCORRECT_ANSWER_POINTS;

    return askToContinue(points) ? play(points) : points;
}

function askToContinue(points){
    return confirm(`Do you want to continue. You have ${points} points`);
}

function getUserNumber(min, max){
    do {
        value = prompt(`Please enter a number between ${min} and ${max}`, '5');
    } while (!value || isNaN(value) || value < min || value > max);

    return +value;
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function isAnswerCorrect(userAnswer, correctAnswer){
    console.log(userAnswer, correctAnswer);
    return userAnswer === correctAnswer;
}

const userPoints = play();

console.log('points', userPoints);