function doubleAndReturnArgs(arr, ...nums) {
    let mul = nums.map((ele) => ele * 2);
    return [...arr, ...mul];
}

doubleAndReturnArgs([1, 2, 3], 4, 4);
// expexted result: [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4);
// expexted result: [2, 20, 8]
