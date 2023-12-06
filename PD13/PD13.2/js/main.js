let x = 5;
let y = 10;
let z = -12;

var zen;

if (x == 0 || y == 0 || z == 0) {
    zen = 'Zero';
} else {
    let negatives = 0;
    if (x < 0) ++negatives;
    if (y < 0) ++negatives;
    if (z < 0) ++negatives;
    
    if (negatives % 2 == 0) {
        zen = '+';
    } else {
        zen = '-';
    }
}

console.log("Product's sign:",zen);