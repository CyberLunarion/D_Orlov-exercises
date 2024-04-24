function findFirstUniqueLetter(s) {
    let symbolObject = {};

    for (let i = 0; i < s.length; i++) {
      let symbol = s[i];
  
      if (!symbolObject[symbol]) {
        symbolObject[symbol] = 1;
      } else {
        symbolObject[symbol]++;
      }
    }
  
    for (let j = 0; j < s.length; j++) {
      if (symbolObject[s[j]] === 1) {
        return s[j];
      }
    }
  
    return null;
}

const sentence = "australia";
const uniqueLetter = findFirstUniqueLetter(sentence);

console.log("Sentence:",sentence);
if (uniqueLetter !== null) {
    console.log("First unique letter is:",uniqueLetter);
} else {
    console.log("There are no unique letters in the sentence");
}
