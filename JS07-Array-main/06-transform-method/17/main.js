let str = "31 45 12 67 34 86 23 37 19 41";

const sumStringNumber = (string) => {
    let split = string.split(" ");
    let sum = split.reduce((acc, ele) => {
        if (+ele < 40) {
            return acc + +ele;
        } else {
            return acc;
        }
    }, 0);
    return sum;
};
sumStringNumber(str);
