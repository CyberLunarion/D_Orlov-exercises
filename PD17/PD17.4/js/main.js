let text = document.getElementsByTagName("p");
let ii = 1;
function buttonFunction() {
    if (ii == 1) {    
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "lightcoral";
        }
        ii++;
    } else if (ii == 2) {
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "aquamarine";
        }
        ii--;
    }
}