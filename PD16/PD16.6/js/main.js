function numberReverse(n) {
    let numberString = n.toString();
    let numberArray = numberString.split("");
    let reverseNumber = ""
    for (let i = numberString.length - 1; i >= 0; i--) {
        reverseNumber = reverseNumber + numberArray[i];
    }
    return reverseNumber
}

const number = 123;
const reversedNumber = numberReverse(number);

console.log("Number:",number);
console.log("Reversed number:",reversedNumber);
