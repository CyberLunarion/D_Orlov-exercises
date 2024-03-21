let unfilteredArray = [11, 4, 15, 13, 28, 11, 5, 4, 22, 29, 13];

console.log("Unfiltered array:", unfilteredArray.toString());

for (let i = 0; i < unfilteredArray.length; i++) {
    for (let ii = i + 1; ii < unfilteredArray.length; ii++) {
        if (unfilteredArray[i] === unfilteredArray[ii]) {
            unfilteredArray.splice(ii, 1);
            ii--;
        }
    }
}

console.log("Filtered array:", unfilteredArray.toString());
