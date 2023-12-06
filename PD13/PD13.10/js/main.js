let a = 5;
let b = 7;
let c = 10;

console.log("Numbers:",a,b,c);

let n1 = Math.max(a,b,c);
var n2;

var l1, l2;

switch (n1) {
    case a:
        l1 = b;
        l2 = c;
        break;
    case b:
        l1 = a;
        l2 = c;
        break;
    case c:
        l1 = a;
        l2 = b;
        break;
}

if (l1 > l2) {
    n2 = l1;
} else if (l2 > l1) {
    n2 = l2;
}

console.log("The two biggest numbers are:",n1,n2);

let sum = n1 + n2;

console.log("The sum of the two biggest numbers is:",sum);
