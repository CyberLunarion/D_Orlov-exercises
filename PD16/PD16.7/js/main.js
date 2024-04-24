function palindromeCheck (t) {
    let textArray = t.split("");
    let result = "";

    for (let i = t.length - 1; i >= 0; i--) {
        result += textArray[i];
    }
     console.log(result);
    if (result == t) {
        return true;
    } else {
        return false;
    }
}

const text1 = "apple";
const text2 = "tacocat";

console.log("Text strings:")
console.log(text1);
console.log(text2);

console.log("is",text1,"a palindrome?");
const check1 = palindromeCheck(text1);
if (check1 == true) {
    console.log(text1,"is a palindrome!")
} else {
    console.log(text1,"isn't a palindrome.")
}

console.log("is",text2,"a palindrome?");
const check2 = palindromeCheck(text2);
if (check2 == true) {
    console.log(text2,"is a palindrome!")
} else {
    console.log(text2,"isn't a palindrome.")
}