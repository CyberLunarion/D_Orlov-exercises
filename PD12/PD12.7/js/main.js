const participants = 4;

const firstParticipantTime = 22;
const secondParticipantTime = 20;
const thirdParticipantTime = 25;
const fourthParticipantTime = 25;

const timeAverage = (firstParticipantTime + secondParticipantTime + thirdParticipantTime + fourthParticipantTime) / participants;

const fastestTime = Math.min(firstParticipantTime, secondParticipantTime, thirdParticipantTime, fourthParticipantTime);

const timeDifference = timeAverage - fastestTime;

console.log('Fastest participant time:',fastestTime,'seconds. They were',timeDifference,'seconds faster than the average participant time.');