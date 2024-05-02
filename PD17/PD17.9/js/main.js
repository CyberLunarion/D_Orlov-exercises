function classFinder() {
    let elements = document.getElementsByClassName("classy");
    for (let i = 0; i < elements.length; i++) {
        document.write(elements[i].innerHTML + "<br>");
    }
}

classFinder();