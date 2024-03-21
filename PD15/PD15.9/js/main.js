function numSum(number) {
    sum += number;
}

function numMultiSum(number) {
    if (multiSum == 0) {
        multiSum =+ number;
    } else {
        multiSum = multiSum * number;
    }
}

const numberArray = [12, 5, 22, 8];

console.log("Numbers:",numberArray.toString());

let sum = 0;
numberArray.forEach(numSum);
console.log("The sum of numbers in the array is:",sum);

let multiSum = 0;
numberArray.forEach(numMultiSum);
console.log("The multiplication sum of numbers in the array is:",multiSum);