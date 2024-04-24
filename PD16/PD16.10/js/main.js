function firstLetterUpper(t) {
    const divideWords = t.split(" ");
    let textCorrected = "";
    for (let i = 0; i < divideWords.length; i++) {
        let letters = divideWords[i].split("");
        letters[0] = letters[0].toUpperCase();
        for (let i = 0; i < letters.length; i++) {
            textCorrected+= letters[i];
        }
        textCorrected+= " ";
    }
    return textCorrected;
}

const text = "hello world!";
const correction = firstLetterUpper(text);

console.log(text);
console.log(correction);