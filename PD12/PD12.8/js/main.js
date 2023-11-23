var fuelAmount = 112;
const fuelCostOnEqualDays = 11;
const fuelCostOnNonEqualDays = 22;

var dayCount = 0;

for (;fuelAmount >= fuelCostOnEqualDays;) {
    fuelAmount = fuelAmount - fuelCostOnEqualDays;
    dayCount = ++dayCount;
    if (fuelAmount < fuelCostOnNonEqualDays) { break; }
    fuelAmount = fuelAmount - fuelCostOnNonEqualDays;
    dayCount = ++dayCount;
}

console.log('They will be able to travel for',dayCount,'days.');