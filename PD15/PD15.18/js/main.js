let array = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 10];

console.log(array.toString());

array = [... new Set(array)];

console.log(array.toString());