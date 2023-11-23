const cups = 7;
const capacity = 3;

const boxes = Math.floor(cups / capacity);
const leftovercups = cups - (boxes * capacity);

console.log('Full box count:',boxes,'Leftover cup count:',leftovercups);
