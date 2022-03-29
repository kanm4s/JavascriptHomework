let twoPoint = (num) => {
    return num.toFixed(2);
};

function trunc2(num) {
    return (Math.trunc((num * 100).toFixed(2)) / 100).toFixed(2);
}
