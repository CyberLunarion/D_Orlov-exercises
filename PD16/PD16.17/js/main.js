function numCheck(n) {
    return n > limit;
}

const limit = 40;
const numberArray = [1, 2, 5, 10, 22, 55, 49, 100, 75, 82, 37];
const filteredArray = numberArray.filter(numCheck);

console.log("Number array:",numberArray);
console.log("Array elements that are bigger than",limit,":");
console.log(filteredArray);