const ucFirst = (str) => {
    let tmp = "";
    let count = 0;
    for (let letter of str) {
        if (count === 0) {
            tmp += letter.toUpperCase();
            count++;
        } else {
            tmp += letter;
        }
    }
    return tmp;
};
