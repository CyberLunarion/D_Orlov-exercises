const busPerDay = 2;

const firstBusTravelTime = 110;
const firstBusPassengers = 17;

const secondBusTravelTime = 120;
const secondBusPassengers = 25;

const averageBusPassengers = firstBusPassengers + secondBusPassengers;
console.log('In total',averageBusPassengers,'passengers are traveling each day.');

const averageBusTravelTime = (firstBusTravelTime + secondBusTravelTime) / busPerDay;
console.log('The average bus travel time is',Math.round(averageBusTravelTime),'minutes.')

var leastTraveledBus;
if (firstBusPassengers < 10) {
    leastTraveledBus = 1;
} else if (secondBusPassengers < 10) {
    leastTraveledBus = 2;
} else {
    leastTraveledBus = 0;
}

if (leastTraveledBus > 0) {
    console.log('Bus with less than 10 passengers is:',leastTraveledBus)
} else {
    console.log('There is no bus with less than 10 passengers.')
}