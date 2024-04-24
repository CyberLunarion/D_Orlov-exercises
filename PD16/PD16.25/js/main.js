function randomNumberGame(n) {
    if (n > 10) {
        console.log("Input a number between 0 and 10");
        return;
    }
    let randomNumber = Math.floor(Math.random() * 11)
    if (n == randomNumber) {
        console.log("You Win");
    } else {
        console.log("You Lose");
    }
    console.log("The number was", randomNumber);
}

console.log("Guess the number between 0 and 10!");
const guess = 10;
console.log("Your guess:", guess);
randomNumberGame(guess);