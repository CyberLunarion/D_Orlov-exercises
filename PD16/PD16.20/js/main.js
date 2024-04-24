function longestCountryNameFinder(c) {
    const divideWords = c.split(", ");
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

const countries = "Australia, Germany, Lithuania, Latvia, India";
const longestCountryName = longestCountryNameFinder(countries);

console.log(countries);
console.log("The longest country name is:", longestCountryName);