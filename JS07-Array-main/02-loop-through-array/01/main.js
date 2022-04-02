function sumArr(num) {
    let sum = 0;
    for (let n of num) {
        sum += +n;
    }
    return sum;
}

const isValidNumber = (number) => {
    if (number === null || number.trim() === "" || isNaN(number)) return false;
    return true;
};

let numArr = [];
let userInput = prompt("Enter number");

while (true) {
    if (!isValidNumber(userInput)) {
        break;
    } else {
        numArr[numArr.length] = userInput;
        userInput = prompt("Enter number");
    }
}

console.log(sumArr(numArr));
