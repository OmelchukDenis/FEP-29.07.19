function getEvenCount(num){
    let count = 0;
    num = String(num);
    for (let i = 0; i < num.length; i++){
        count += num[i]%2 ? 0 : 1;
    }

    return count;
}

function getNumber(){
    do {
        value = prompt('Please enter a number', '123');
    } while (!value || isNaN(value));

    return value;
}

const num = getNumber();
const evenCount = getEvenCount(num);
console.log('count', evenCount);