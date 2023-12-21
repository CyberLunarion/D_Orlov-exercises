var startDate = 1997;
const endDate = 2018;
const division = 4;
var remainder;
var result = "";

console.log("Years : from",startDate,"to",endDate);

for (; startDate <= endDate; startDate++) {
    remainder = startDate % division;
    if (remainder == 0) {
        result = result + startDate + " ";
    } 
}

console.log("Years divisable by",division,":",result);