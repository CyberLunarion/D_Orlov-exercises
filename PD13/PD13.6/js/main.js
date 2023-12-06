let n1 = 52;

let a1 = n1 / 10;
let b1 = n1 % 10;

console.log("Two digit number:",n1);

if (a1 > b1) {
    console.log("The first digit is the biggest one.");
} else if (b1 > a1) {
    console.log("The second digit is the biggest one.");
}