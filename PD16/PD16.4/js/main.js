function factorial(n) {
    let f = n;
    for (let i = n - 1; i > 0; i--) {
        f = f * i;
    }
    return f;
}

const number = 6;
const factorialNumber = factorial(number);

console.log("Number:",number);
console.log("Factorial number:",factorialNumber);