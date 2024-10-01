let birthYear = prompt("Type the year your were born");
let town = prompt("Type the town you live in");
let favSport = prompt("Type your favourite sport");

let message = "";

let userAge = 2024 - (+birthYear); 

if (birthYear === null) {
    message += (` Шкода, що Ви не захотіли ввести свій рік народження`)
} else {
    message += (`Currently you ${userAge} years old`);
}

if (town === "Київ") {
    message += (` Ти живеш у столиці України`);
} else if (town === "Вашингтон") {
    message += (` Ти живеш у столиці USA`);
} else if (town === "Лондон") {
    message += (` Ти живеш у столиці Великобританії`);
} else if (town === null) {
    message += (` Шкода, що Ви не захотіли ввести свій город`)
} else {
    message += (` Ти живеш у місті ${town}`);
}

if (favSport === "бокс") {
    message += (` Круто! Хочеш стати Кононом МакГрегором?`);
} else if (favSport === "йога") {
    message += (` Круто! Хочеш стати сбалансованим?`);
} else if (favSport === "пілатес") {
    message += (` Круто! Хочеш займатися за програмою Джозефа Пілатеса?`);
} else if (favSport === null) {
    message += (` Шкода, що Ви не захотіли ввести свій улюблений вид спорту`)
}

alert(message);