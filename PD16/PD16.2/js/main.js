function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const c = 15;
const f = toFahrenheit(c);

console.log("Celsius temperature:",c);
console.log("Fahrenheit temperature:",f);