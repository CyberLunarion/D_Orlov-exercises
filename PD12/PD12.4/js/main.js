const tunnelLength = 264;
const carSpeedPerHour = 60000;
const carSpeedPerSecond = (carSpeedPerHour / 60) / 60;

const tunnelClearTime = tunnelLength / carSpeedPerSecond;

console.log('The car will clear the tunnel in',tunnelClearTime.toFixed(2),'seconds.');
