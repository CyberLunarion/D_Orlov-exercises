function numbersum(total, value) {
    return total + value;
}

const numbers1 = [3, 5, 8, 4, 5];
const numbers2 = [9, 4, 5, 12, 6];

console.log("Arrays:");
console.log(numbers1.toString());
console.log(numbers2.toString());

let sum1 = numbers1.reduce(numbersum);
let sum2 = numbers2.reduce(numbersum);
let totalsum = sum1 + sum2;

console.log("The total sum of the arrays is",totalsum);