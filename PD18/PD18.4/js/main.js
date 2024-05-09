function myFunction() {
    for (let x in person) {
        console.log(person[x]);
    }
}

const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:38
}

myFunction();