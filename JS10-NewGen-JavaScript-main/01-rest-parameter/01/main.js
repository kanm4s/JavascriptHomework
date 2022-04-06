const multiply = (...nums) => {
    return nums.reduce((acc, ele) => acc * ele, 1);
};

multiply(4, 5, 2);
