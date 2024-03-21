function symbolConvert() {
    symbols += count + " ";
    ++count;
}

const arrayRow = ["Cat", "Dog", "Bird", "Fish"]
let symbols = "";
let count = 1;

arrayRow.forEach(symbolConvert);

console.log(symbols);