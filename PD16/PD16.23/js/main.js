function mathAdd(a, b) {
    if (a !== 0 && b !== 0) {
        console.log(a + b);
    } else {
        console.log("Can't add by 0.")
    }
}

function mathSubtract(a, b) {
    if (a !== 0 && b !== 0) {
        console.log(a - b);
    } else {
        console.log("Can't subtract by 0.")
    }
}

function mathMultiply(a, b) {
    if (a !== 0 && b !== 0) {
        console.log(a * b);
    } else {
        console.log("Can't multiply by 0.")
    }
}

function mathDivide(a, b) {
    if (a !== 0 && b !== 0) {
        console.log(a / b);
    } else {
        console.log("Can't divide by 0.")
    }
}

const number1 = 10;
const number2 = 15;

mathAdd(number1, number2);
mathSubtract(number1, number2);
mathMultiply(number1, number2);
mathDivide(number1, number2);