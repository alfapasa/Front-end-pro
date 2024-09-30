let fiveDigitsNumber = 10369;

let firstDigit = Math.floor(fiveDigitsNumber / 10000);
let secondDigit = Math.floor(fiveDigitsNumber % 10000 / 1000);
let thirdDigit = Math.floor(fiveDigitsNumber % 1000 / 100);
let fourthDigit = Math.floor(fiveDigitsNumber % 100 / 10);
let fifthDigit = Math.floor(fiveDigitsNumber % 10);

console.log(`${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit} ${fifthDigit}`);