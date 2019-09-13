function createCalculator(result = 0) {

    return {
        add: (val) => result += val,
        sub: (val) => result -= val,
        divide: (val) => result /= val,
        mult: (val) => result *= val,
        set: (val) => result = val
    }
}

const calculator = createCalculator(10);

console.log(calculator.add(45));
console.log(calculator.sub(45));
console.log(calculator.divide(5));
console.log(calculator.mult(5));
console.log(calculator.set(100));
console.log(calculator.mult(5));
