
let str = "hello world";
let arrToDel = ['l', 'd'];


function eraseToDelete (str, arrToDel) {
    let arrStr = str.split("");
    
    let newArr = "";

    for (let i = 0; i < arrStr.length; i++) {
        let character = arrStr[i];

        if (!arrToDel.includes(character)) {
            newArr += character; 
        }
    }
    return newArr;
}

console.log(eraseToDelete(str, arrToDel));