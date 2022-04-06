const first = (arr, n) => {
    if (n === undefined || n <= 1) {
        return arr[0] ? arr[0] : [];
    } else {
        return arr.slice(0, n);
    }
};

const first = function (arr, n = 1) {
    if (n === 1) return arr[0];
    return arr.slice(0, n);
};
