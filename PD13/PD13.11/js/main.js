const s = 1000;
const k = 1200;
let n = 4;
let t = 3000;
let m = 2000;

console.log("Minimum per family member income needed is:",s,"eur.");
console.log("Tax loan repayment:",k,"eur.");
console.log("The father's income is:",t,"the mother's income is:",m);

let p = (t + m) / n;

console.log("Per family member income:",p);

if (p >= s && p - k >= 0) {
    console.log("Applicable for bank loan.");
} else {
    console.log("Not applicable for bank loan.");
}