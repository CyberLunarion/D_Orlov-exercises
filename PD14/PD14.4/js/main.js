const january = [-11.5, -10.3, -12, -6.5, -5, -15.5];
const february = [-16, -14.5, -11, -10.3, -3.5, 0];
const march = [-3, -2.5, 0, 5, 9.5, 11.2];

var januaryAverageTemp = 0;

for (let temp in january) {
    januaryAverageTemp = januaryAverageTemp + january[temp];
}

januaryAverageTemp = januaryAverageTemp / 6;

console.log("Average temperature for January:",januaryAverageTemp.toFixed(2),"celsius.");

var februaryAverageTemp = 0;

for (let temp in february) {
    februaryAverageTemp = februaryAverageTemp + february[temp];
}

februaryAverageTemp = februaryAverageTemp / 6;

console.log("Average temperature for February:",februaryAverageTemp.toFixed(2),"celsius.");

var marchAverageTemp = 0;

for (let temp in march) {
    marchAverageTemp = marchAverageTemp + march[temp];
}

marchAverageTemp = marchAverageTemp / 6;

console.log("Average temperature for March:",marchAverageTemp.toFixed(2),"celsius.");

let averageTemp = (januaryAverageTemp + februaryAverageTemp + marchAverageTemp) / 3;

console.log("Average temperature for all recorded months:",averageTemp.toFixed(2),"celsius.");