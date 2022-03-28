let input = prompt("Enter number");
let sum = 0;
let average = 0;

while (input) {
    if (!isNaN(input) && +input > 0) {
        sum += Number(input);
        average = (average + Number(input)) / 2;
        input = prompt("Enter number");
    } else if (+input == 0) {
        input = false;
    } else if (+input <= -1) {
        input = false;
    } else {
        input = false;
    }
}

console.log(`sum:${sum} average:${average}`);

// let input = prompt('Enter number')
// let sum = 0
// let count = 0

// while (!(input === 0 | input === ''|| input ===null)) {
//     sum += +input;
//     count ++;
//     input = prompt("Enter number");
// }
// console.log(sum);
// console.log(sum/count);
