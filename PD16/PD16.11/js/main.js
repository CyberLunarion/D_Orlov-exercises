function longestWordFinder(t) {
    const divideWords = t.split(" ");
    let length = [];
    for (let i = 0; i < divideWords.length; i++) {
        let letters = divideWords[i].split("");
        length.push(letters.length);
    }
    let highestNumber = Math.max.apply(null, length);
    let position = length.indexOf(highestNumber);
    let longestWord = divideWords[position];
    return longestWord;
}

const sentence = "This is a sentence";
const theLongestWord = longestWordFinder(sentence);

console.log(sentence);
console.log("The longest word is:", theLongestWord);
