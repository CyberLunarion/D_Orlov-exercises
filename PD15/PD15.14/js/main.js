const array1 = [1, 2, 3, 4, 5,];
const array2 = [4, 5, 6, 7, 8, 9];

console.log("Arrays:");
console.log(array1.toString());
console.log(array2.toString());

let connectedArray = array1.concat(array2);
let filteredArray = [... new Set(connectedArray)];

console.log(filteredArray.toString());