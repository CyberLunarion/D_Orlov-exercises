const randomArray = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

console.log("Array before randomizing:",randomArray.toString());

for (let i = randomArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = randomArray[i];
    randomArray[i] = randomArray[j];
    randomArray[j] = k;
}

console.log("Randomized array:", randomArray.toString())