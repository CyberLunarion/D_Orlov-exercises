function perfectNumberCheck(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            count += i;
        }
    }
    if (count == n) {
        return true;
    } else {
        return false;
    }
}

const number = 28;
const isPerfect = perfectNumberCheck(number);

console.log("Is",number,"a perfect number?");
if (isPerfect == true) {
    console.log(number,"is a perfect number!");
} else {
    console.log(number,"is not a perfect number.");
}