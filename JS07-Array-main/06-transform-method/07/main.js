const nums = [-3, 2, 11, -7, 4, 6];

const multiply = nums.reduce((acc, ele) => {
    return acc * ele;
}, 1);

console.log(multiply);
