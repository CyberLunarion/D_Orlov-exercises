function KMICalculator (w, h) {
    return w / (h * h);
}

const weight = 60;
const height = 1.82;
const KMI = KMICalculator(weight, height);

console.log("Weight:", weight, "kg");
console.log("Height:", height, "m");
console.log("KMI:", KMI);