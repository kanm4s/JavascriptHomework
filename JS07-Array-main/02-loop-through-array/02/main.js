const squareArr = (numArr) => {
    tmp = [];

    for (let i = 0; i < numArr.length; i++) {
        tmp[i] = numArr[i] * numArr[i];
    }

    return tmp;
};

const arr = [2, 3, 5, 7, 11];
squareArr(arr); // [4, 9, 25, 49, 121]
