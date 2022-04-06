function cloneArray(...arr) {
    return [...arr];
}

let arr1 = [1, 2, 3, 4];

let arr2 = cloneArray(...arr1);

console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);
