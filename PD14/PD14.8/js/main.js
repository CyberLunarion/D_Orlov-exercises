function multiplyFunction(x) {
    let text = "";
    for (let i = 1; i <= numMax; i++) {
        text = text + (x * i) + " ";
    }
    return text;
}

const numMax = 10;

for (let n = 1; n <= numMax; n++) {
    var result = multiplyFunction(n);
    console.log(result);   
}
