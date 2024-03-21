function findNaN(value) {
    const NaNIndex = [];

    for (let i = 0; i < value.length; i++) {
        if (isNaN(value[i])) {
            NaNIndex.push(i);
        }
    }

    return NaNIndex;
}

const corruptedArray = [1, 2, NaN, 4, 5, NaN, NaN, 8, 9, NaN];

console.log("Corrupted array:",corruptedArray.toString());

const NaNArray = findNaN(corruptedArray);

console.log("Indexes of NaN values:",NaNArray.toString());