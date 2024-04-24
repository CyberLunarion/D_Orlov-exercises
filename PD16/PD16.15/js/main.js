function secondSmallestNumber(n) {
    n.sort(function(a, b){return a - b});
    return n[1];
}

function secondBiggestNumber(n) {
    n.sort(function(a, b){return b - a});
    return n[1];
}

const numberArray = [25, 50, 75, 100, 2, 5, 1, 7, 10, 12];
console.log("Number array:",numberArray);

const answerSmallest = secondSmallestNumber(numberArray);
const answerBiggest = secondBiggestNumber(numberArray);

console.log("The second smallest number is",answerSmallest);
console.log("The second biggest number is",answerBiggest);