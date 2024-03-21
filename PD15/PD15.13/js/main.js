const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 3, 4, 5, 7, 8, 9, 11, 12];

console.log("Arrays:");
console.log(array1.toString());
console.log(array2.toString());

let difference = array2.filter(number => number);
difference = array2.filter(number => !array1.includes(number));

console.log(difference.toString());