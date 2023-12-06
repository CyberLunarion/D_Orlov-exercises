const x = 2;
const y = -2;
const z = 4;

var highest, lowest, inbetween;

highest = Math.max(x,y,z);
lowest = Math.min(x,y,z);

if (x > lowest && x < highest) {
    inbetween = x;
} else if (y > lowest && y < highest) {
    inbetween = y;
} else if (z > lowest && z < highest ) {
    inbetween = z;
}

console.log("Result:",lowest,inbetween,highest);
