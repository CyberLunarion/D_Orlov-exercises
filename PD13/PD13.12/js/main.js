let carCapacity = 5;
let boxes = 129;

var rounds;

rounds = boxes / carCapacity;
rounds = Math.ceil(rounds);

console.log("There are",boxes,"boxes to deliver.");
console.log("The car can load only",carCapacity,"boxes at the same time.");
console.log("It would take",rounds,"trips to deliver all boxes.");