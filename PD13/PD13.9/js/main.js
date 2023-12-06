let a = 5;
let b = 8;
let c = 4;
let d = 7;

console.log("Envelope's dimensions:",a,b);
console.log("Postcard's dimensions:",c,d);

let x = a - c;
let y = b - d;

if (x >= 1 && y >= 1) {
    console.log("The postcard will fit into the envelope.");
} else {
    console.log("The postcard will not fit into the envelope.");
}