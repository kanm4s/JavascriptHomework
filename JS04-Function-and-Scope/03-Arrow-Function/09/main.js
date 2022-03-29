let findLeapYear = (year) => {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

const isLeapYear = (year) => {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    // if (year % 400 === 0) return true;
    // return false;
    // or
    return year % 400 === 0;
};
