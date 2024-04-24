function letterCounting(s) {
    const stringArray = s.split(" ");
    let letterCount = 0;
    for (let i = 0; i < stringArray.length; i++) {
        letterCount += stringArray[i].length;
    }
    return letterCount;
}

const string = "It's a beautiful day outside.";
const lettersnumber = letterCounting(string);

console.log(string);
console.log("Number of letters in string:",lettersnumber);