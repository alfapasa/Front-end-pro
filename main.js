//Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let number = +prompt('Type the number');

for (let i = 1; i <= 100 && i * i < number; i++) {
    console.log(i);
}