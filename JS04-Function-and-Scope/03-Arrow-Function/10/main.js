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

let calDayFromBirthYear = (year) => {
    let countLeapYear = 0;
    let countNormalYear = 0;

    if (year > 2020) {
        return "Year incorrect!";
    }

    // count leap year and nornal year seperately
    for (let i = year; i <= 2020; i++) {
        if (findLeapYear(i)) {
            countLeapYear++;
        } else {
            countNormalYear++;
        }
    }

    return countLeapYear * 366 + countNormalYear * 365;
};
