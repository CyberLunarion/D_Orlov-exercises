function matrixGenerator(r, c) {
    let matrix = "";
    for (let i = 1; i <= r; i++) {
        for (let ii = 1; ii <= c; ii++) {
            if (ii == c) {
                matrix += ii + "\n";
            } else {
                matrix += ii + "  ";
            }
        }
    }
    return matrix;
}

const rows = 5;
const columns = 7;
const matrix = matrixGenerator(rows, columns);
console.log(rows, "rows and", columns, "columns matrix:");
console.log(matrix);