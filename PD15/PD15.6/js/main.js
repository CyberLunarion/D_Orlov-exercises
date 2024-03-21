function duplicateFind(duplicate) {
    if (duplicate == element) {
        count++;
    }
}

const numbers = [11, 15, 2, 15, 18, 23, 15, 19, 12, 3, 8];

console.log("Numbers Array:");
console.log(numbers);

let count = 0;
let element = 15;

console.log("Looking for duplicates of element:",element);
numbers.forEach(duplicateFind);
console.log("Found",count,"duplicates.");