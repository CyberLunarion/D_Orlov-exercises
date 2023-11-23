const wallHeight = 300;
const wallLength = 400;

const tileHeight = 10;
const tileLength = 20;
const tilePrice = 0.5;

const wallArea = wallHeight * wallLength;
const tileArea = tileHeight * tileLength;

const tileSum = wallArea / tileArea;
const tilePriceSum = tilePrice * tileSum;

console.log('Tile count:',tileSum,'Tile price sum:',tilePriceSum,'EUR');