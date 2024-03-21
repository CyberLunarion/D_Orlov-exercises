function convertCase(object) {
    let objectString = object.toString();
    let word = "";
    for(let i = 0; i < objectString.length; i++) {
        let char = objectString.charAt(i);
        let charCode = char.charCodeAt(0);

        let lowerCase = char.toLowerCase();
        lowerCase = lowerCase.charCodeAt(0);

        let upperCase = char.toUpperCase();
        upperCase = upperCase.charCodeAt(0);

        if (charCode === lowerCase) {
            char = char.toUpperCase();
            word += char;
        } else if (charCode === upperCase) {
            char = char.toLowerCase();
            word += char;
        }
    }
    switchedText += word + " ";
}

const array1 = ["Dog", "House", "CrAzY", "LOWERCASE", "uppercase"]

let text = array1.toString();
console.log(text);

let switchedText = "";
array1.forEach(convertCase);
console.log(switchedText);
