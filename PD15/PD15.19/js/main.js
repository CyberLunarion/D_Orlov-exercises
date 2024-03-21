function sortNum(a, b) {
    return a - b;
}

const numbers = [5, 7, 1, 4, 9, 10, 6];

console.log(numbers.toString());

numbers.sort(sortNum);

console.log(numbers[2]);