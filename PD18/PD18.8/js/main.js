function myFunction() {
    let count = 0;
    for (let x in person1) {
        if (person1[x] == person2[x]) {
            count++;
        }
    }
    if (count == 3) {
        console.log("The objects are identical.")
    } else {
        console.log("The objects are not identical.")
    }
}

const person1 = {
    firstName:"John", 
    lastName:"Doe", 
    age:38
};

const person2 = {
    firstName:"Jane", 
    lastName:"Doe", 
    age:37
};

myFunction();