function myFunction() {
    const filteredNumbers = numbers;
    for (let x in filteredNumbers) {
        if (filteredNumbers[x] < 10) {
            delete filteredNumbers[x];
        }
    }
    return filteredNumbers;
}

const numbers = {
    number1: 12,
    number2: 25,
    number3: 5,
    number4: 9,
    number5: 39
}
console.log(numbers);

const filtered = myFunction();
console.log(filtered);