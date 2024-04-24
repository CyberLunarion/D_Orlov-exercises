function sortAlphabet(s) {
    const letters = s.split("");
    let sortedString = "";
    letters.sort();
    console.log(letters);
    for (let i = 0; i < letters.length; i++) {
        sortedString += letters[i];
    }
    return sortedString;
}

const string = "applepielemoncake";
const sorted = sortAlphabet(string);

console.log("Unsorted:",string);
console.log("Sorted:",sorted);