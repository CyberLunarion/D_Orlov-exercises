var amoeba = 1;
const time = 3;
const maxTime = 24;
const splitResult = 2;

console.log("In the beginning there was only",amoeba,"amoeba...");

for (let timePassed = time; timePassed <= maxTime; timePassed = timePassed + time) {
    amoeba = amoeba * splitResult;
    console.log("After",timePassed,"hours there would be",amoeba,"amoebas.")
}