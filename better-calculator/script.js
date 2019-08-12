'use strict'

let operation = null;
let operand1 = null;
let operand2 = null;
let result = null;

function add(a, b) { return a + b }
function sub(a, b) { return a - b }
function div(a, b) { return a / b }
function mult(a, b) { return a * b }
function getOperand(operandIndex){
    let operand;
    
    do {
        operand = +prompt('Operand ' + operandIndex, '2');
    } while (isNaN(operand));

    return operand;
}

do {
    operation = prompt('Choose action (add, sub, div, mult)', 'add');
} while (
    operation != 'add' &&
    operation != 'sub' &&
    operation != 'div' &&
    operation != 'mult'
);

operand1 = getOperand(1);
operand2 = getOperand(2);

switch (operation) {
    case 'add': result = add(operand1, operand2); break;
    case 'sub': result = sub(operand1, operand2); break;
    case 'div': result = div(operand1, operand2); break;
    case 'mult': result = mult(operand1, operand2); break;
}

alert('Result: ' + result);

