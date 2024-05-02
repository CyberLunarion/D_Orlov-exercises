function buttonAction() {
    let input = document.forms["myForm"]["someText"].value;
    document.getElementById("replacedText").innerHTML = input;
}