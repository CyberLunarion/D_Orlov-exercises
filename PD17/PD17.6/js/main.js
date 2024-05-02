function buttonAction() {
    if (i == 1) {
        alert("Can't remove more than one item from the list.")
    } else {
        list[0].remove();
        i++;
    }
}

let list = document.getElementsByTagName("li");
let i = 0;