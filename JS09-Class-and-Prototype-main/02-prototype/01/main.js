Array.prototype.max = function () {
    return this.sort((a, b) => a - b);
};

console.log([1, 3, 5, 7, 3, 2].max());

Array.prototype.sum = function () {
    return this.reduce((acc, ele) => (acc += ele), 0);
}[(1, 3, 5, 7, 3, 2)].sum();
