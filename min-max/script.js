const minElem = document.getElementById('min');
const maxElem = document.getElementById('max');

const userName = getUserName();
printGreeting(userName);

const userNumbers = getUserNumbers();
if (numbersValid(userNumbers)){
    const values = getMinMaxValues(userNumbers);
    printMinMaxValues(values);
} else {
    printError();
}

function getUserName(){
    let value;

    do {
        value = prompt('What is your name?');

        value = value && value.trim();
    } while (!value);

    return value;
}

function printGreeting(name){
    document.getElementById('greeting').innerHTML = `Hello, ${name}!`;
}

function getUserNumbers(){
    do {
        value = prompt('What are your numbers?');

        value = value && value.trim();
    } while (!value);

    return value.split(',').map(Number);
}

function numbersValid(nums){
    return !nums.some(isNaN);
}

function getMinMaxValues(nums){
    nums.sort((a, b) => a - b)

    return {
        min: nums[0],
        max: nums[nums.length - 1]
    }
}

function printMinMaxValues(values){
    minElem.innerHTML = `Min value: ${values.min}`;
    maxElem.innerHTML = `Max value: ${values.max}`;
}

function printError(){
    maxElem.innerHTML = 'Error!';
    maxElem.style.backgroundColor = 'red';
}