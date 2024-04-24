function triangleArea(b, h) {
    return 1/2 * b * h;
}

const base = 12;
const height = 8;
const area = triangleArea(base, height);

console.log("Triangle base:",base);
console.log("Triangle height:",height);
console.log("Triangle area:",area);