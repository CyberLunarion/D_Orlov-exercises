const p = 5, pz = 50, a = 3, az = 45, k = 3, t = 5;

var c1 = (pz * p - az * a) * k;
var m1 = 0;
for (;c1 >= 100;) {
    c1 = c1 - 100;
    m1 = ++m1;
}
console.log("Donatas' distance:",m1,'meters and',c1,'centimeters.');

var c2 = (pz * p + az * a) * k;
var m2 = c2 / 100;
let v = m2 / t;
console.log("Donatas' speed:",v.toFixed(2),'m/s.')