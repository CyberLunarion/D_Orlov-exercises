function arrayDuplicate(originalArray) {
    arrayCopy = arrayCopy + originalArray + " ";
} 

const dummyArray = ["First", "Second", "Third"];

let arrayCopy = "";
dummyArray.forEach(arrayDuplicate);

console.log(arrayCopy);
