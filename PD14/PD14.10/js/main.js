var number = 100;
const endNumber = 200;
const divisor = 3;

console.log("Numbers from",number,"to",endNumber,"that can be divided by",divisor,":");

for (var result = ""; number <= endNumber; number++) {
    if (number % divisor == 0) {
        result = result + number + " ";
    }
}

console.log(result);