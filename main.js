let threeDigitsNumber = prompt('Type 3digits number');
let userNumber = +threeDigitsNumber;

let firstDigit = Math.floor(userNumber / 100);
let secondDigit = Math.floor(userNumber % 100 / 10);
let thirdDigit = userNumber % 10;

firstDigit === secondDigit && secondDigit === thirdDigit ? console.log("Yes, it's true, all digits are equal") : console.log("No, it's not true, all digits are not equal");
firstDigit === secondDigit || secondDigit === thirdDigit || firstDigit === thirdDigit ? console.log("Yes, there are the same digits") : console.log("None of these digits are equal");
