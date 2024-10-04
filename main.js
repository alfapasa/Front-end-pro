//Дано масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = prompt("Type array");

function mean(arr) {
    let newArr = [];

    for (let i = 0; i <arr.length; i++) {
        
            if (!isNaN(arr[i])) {
                newArr.push(+arr[i]);
            } else {
                continue;
            }
    }
    let result;
    let summ = 0;
    for (i = 0; i < newArr.length; i++) {
        summ += newArr[i];
        result = summ / newArr.length;

    }

    return result;
};

console.log(mean(arr));