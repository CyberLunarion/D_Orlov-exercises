function myFunction() {
    const newPerson = person;
    return newPerson;
}

const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:38,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person);

const person2 = myFunction();
person2.firstName = "Jane";
person2.age = 37;
console.log(person2);