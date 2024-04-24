function resultPrint(answer) {
    console.log(answer);
}

function calculator(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

const number1 = 6;
const number2 = 8;

console.log("Numbers:", number1, number2);
console.log("Sum of the numbers:")
calculator(number1, number2, resultPrint);