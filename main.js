//Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

function sumCount () {
    let total = 0;

    return function (num) {
        total += num;
        return total;
    }
};

const sum = sumCount();

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27