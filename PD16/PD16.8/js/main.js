function wordVariantFinder(w) {
    let variants = [];
    function variantGenerator(w1, w2) {
        for (let i = 0; i < w2.length; i++) {
            let w3 = w1 + w2[i];
            variants.push(w3);
            variantGenerator(w3, w2.slice(i + 1));
        }
    }
    variantGenerator("", w);
    return variants;

}

const word = "apple";
let wordVariants = wordVariantFinder(word);
console.log(wordVariants);