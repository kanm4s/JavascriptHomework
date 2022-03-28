function max(num1, num2, num3, num4) {
    let maxNum = num1;

    maxNum = maxNum < num2 ? num2 : maxNum;
    maxNum = maxNum < num3 ? num3 : maxNum;
    maxNum = maxNum < num4 ? num4 : maxNum;
    return maxNum;
}
console.log(max(7, 3, 9, 2));
console.log(max(7));
console.log(max(1, 2));
console.log(max(5, 2));
console.log(max());

// Math.max
