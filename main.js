//Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let hrn = 26;
let convert;

for (let i = 10; i <= 100; i += 10) {
    convert = i * hrn;
    console.log(convert);
}
