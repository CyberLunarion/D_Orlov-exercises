let body = document.getElementById("stylizedBody");
let i = 1;
document.getElementById("button1").addEventListener("click", buttonFunction);

function buttonFunction() {
    if (i == 1) {
        body.style.backgroundColor = "lightblue";
        i++;
    } else if (i == 2) {
        body.style.backgroundColor = "lightyellow";
        i++;
    } else if (i == 3) {
        body.style.backgroundColor = "lightcoral";
        i -= 2;
    }
}