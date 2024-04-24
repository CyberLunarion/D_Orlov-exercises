function applePie() {
    let functionString = applePie.toString();
    console.log(functionString);
    const divided = functionString.split(" ");
    let functionName = divided[1];
    let location = functionName.indexOf("(");
    functionName = functionName.slice(0, location);
    console.log(functionName);
}

applePie();