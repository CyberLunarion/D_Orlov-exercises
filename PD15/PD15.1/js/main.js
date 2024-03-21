function ArrayID(object) {
    isArray = object instanceof Array;
    if (isArray == true) {
        return true;
    } else {
        return false;
    }
}

const realArray = ["First", "Second", "Third"];
const notArray = "One";

console.log("First check:");

let result1 = ArrayID(realArray);
if (result1 == true) {
    console.log("Array identified!");
} else {
    console.log("Array not found.");
}

console.log("Second check:");

let result2 = ArrayID(notArray);
if (result2 == true) {
    console.log("Array identified!");
} else {
    console.log("Array not found.")
}