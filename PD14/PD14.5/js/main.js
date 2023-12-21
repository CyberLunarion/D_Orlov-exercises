var wages = [824.25, 1225.12, 459.16, 1500];

let preIncrease = "";

for (let salary in wages) {
    preIncrease += wages[salary] + " ";
}

console.log("Salaries pre-increase:",preIncrease);

for (let salary in wages) {
    if (wages[salary] > 1000) {
        wages[salary] = wages[salary] + (wages[salary] / 100 * 5);
    } else if (wages[salary] < 1000) {
        wages[salary] = wages[salary] + (wages[salary] / 100 * 10);
    }
}

let afterIncrease = "";

for (let salary in wages) {
    afterIncrease += wages[salary].toFixed(2) + " ";
}

console.log("Salaries after increase:",afterIncrease);