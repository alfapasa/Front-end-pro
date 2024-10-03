//Дано ціле число (ввести через 'prompt').
//З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let number = +prompt("Type the number");
let isPrime = true;

for (let i = 2; i < number && number > 1; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    };
}

if (isPrime) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} isn't a prime number`);
};


