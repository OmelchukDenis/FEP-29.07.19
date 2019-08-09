"use strict"
//1   Спрашиваем оператор
let operator;
let operandsCount;
let operand;
let result = null;

do {
    operator = prompt('Choose operator', 'add');
} while( operator != 'add' &&
         operator != 'sub' &&
         operator != 'div' &&
         operator != 'mult'
        )

// 2  Сколько операндов
do {
    operandsCount = +prompt('Operands count', '2');
} while( isNaN(operandsCount) ||
        operandsCount <= 0 ||
        operandsCount >= 5
        )

for (let i=1; i <= operandsCount; i++){
    do {
        operand = +prompt('Operand ' + i, '0');
    } while(isNaN(operand))

    if (result === null) {
        result = operand;
        continue;
    }

    switch (operator){
        case 'add': result += operand; break;
        case 'sub': result -= operand; break;
        case 'div': result /= operand; break;
        case 'mult': result *= operand; break;
        default: console.warn(operator + 'is not valid');
    }

    console.log('Operand ' + i, operand);
}

alert('Result: ' + result)

console.log('operator', operator, operandsCount, result);