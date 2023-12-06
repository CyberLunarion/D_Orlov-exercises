let n1 = 9;
let n2 = 27;

console.log("Is",n2,"divisible by",n1,"?");

let dr = n2 % n1;

if (dr == 0) {
    console.log("Yes");
} else if (dr > 0) {
    console.log("No");
}