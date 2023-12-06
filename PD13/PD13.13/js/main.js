let firstItem = 11.99;
let secondItem = 9.99;
let discount = 20;
let budget = 20;

console.log("The man's budget is",budget,"eur.");
console.log("The first item costs",firstItem,"eur and the second item costs",secondItem,"eur.");
console.log("But there is a",discount,"percent discount.");

let discount1 = (firstItem / 100) * discount;
let discount2 = (secondItem / 100) * discount;

let discountedItem1 = firstItem - discount1.toFixed(2);
let discountedItem2 = secondItem - discount2.toFixed(2);

let sum = discountedItem1 + discountedItem2;

console.log("Both items will cost",sum,"eur with the",discount,"percent discount.");

if (budget >= sum) {
    console.log("The man will be able to afford the items.");
} else if (budget < sum) {
    console.log("The man will not be able to afford the items.");
}
