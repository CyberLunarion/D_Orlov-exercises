let circleradius = 5;
const PI = 3.14;

let circlearea = PI * Math.pow(circleradius, 2);

console.log("The circle area is:",circlearea);

let squareside = 6;

let squarearea = Math.pow(squareside, 2);

console.log("The square area is:",squarearea);

let rectangleside1 = 6;
let rectangleside2 = 8;

let rectanglearea = rectangleside1 * rectangleside2;

console.log("The rectangle area is:",rectanglearea);

var biggestarea;

if (circlearea > squarearea && circlearea > rectanglearea) {
    biggestarea = "circle area";
} else if (squarearea > circlearea && squarearea > rectanglearea) {
    biggestarea = "square area";
} else if (rectanglearea > circlearea && rectanglearea > squarearea) {
    biggestarea = "rectangle area";
}

console.log("The biggest area is: the",biggestarea);