function primeNumberCheck(n) {
    if (n == 1) {
        return false;
    }

    if (n == 2) {
        return true;
    }

    for (let i = n - 1; i > 1; i--) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function answer(arg, num) {
    if (arg == true) {
        console.log(num,"is a prime number!")
    } else {
        console.log(num,"is not a prime number.")
    }
}

const number1 = 13;
const number2 = 10;
const number3 = 61;

console.log("Which numbers are prime numbers?")
const isPrime1 = primeNumberCheck(number1);
const isPrime2 = primeNumberCheck(number2);
const isPrime3 = primeNumberCheck(number3);

answer(isPrime1,number1);
answer(isPrime2,number2);
answer(isPrime3,number3);