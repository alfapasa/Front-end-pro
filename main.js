//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


const array = [1, 3, 4, 6, 2, 5, 7];
let item = 4;

function removeElement(array, item) {
    const newArr = array.filter(function(number) {
        return number !== item;
    })
    return newArr;
};

let resultArr = removeElement(array, item);

console.log(resultArr);