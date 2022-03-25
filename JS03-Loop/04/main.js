let resultSum = 0;
let resultOdd = 0;
let resultEven = 0;

let powerTwo = 0;
let powerThree = 0;

for (let i = 1; i <= 100; i++) {
    resultSum += i;
    if (i % 2 === 0) {
        resultEven += i;
        powerTwo = powerTwo + i ** 2;
    } else {
        resultOdd += i;
    }

    if (i % 3 === 0) {
        powerThree = powerThree + i ** 2;
    }
}

console.log(resultSum);
console.log(resultOdd);
console.log(resultEven);
console.log(powerTwo);
console.log(powerThree);
