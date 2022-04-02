let flattened = [
    [0, 1],
    [2, 3],
    [4, 5],
];

let result = [];
for (let ele of flattened) {
    result = result.concat(ele);
}

console.log(result);
