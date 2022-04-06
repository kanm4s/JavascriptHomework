function calc(num) {
    let split = String(num).split("");
    let sumNum = split.reduce((acc, ele) => acc + +ele, 0);
    let mulnum = sumNum * 2;

    let atLeast = mulnum - sumNum;
    console.log(atLeast)
}

console.log(calc(99)); // 9999 >> 36
console.log(calc(10)); // 11 >> 2
console.log(calc(20)); // 22 >> 4
console.log(calc(202)); // 206 >> 8
console.log(calc(29)); // 499 >> 22
console.log(calc(90)); // 99 >> 18

function countStr (str) {
    let str = str.toLowerCase().split("")
    console.log(str)
}

countStr ('codecamp11')
