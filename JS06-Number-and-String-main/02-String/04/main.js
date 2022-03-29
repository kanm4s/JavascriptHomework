let checkWord = (str) => {
    let lower = str.toLowerCase();

    if (lower.indexOf("xxx") > -1) {
        return true;
    } else if (lower.indexOf("porn") > -1) {
        return true;
    } else if (lower.indexOf("sex") > -1) {
        return true;
    }

    return false;
};
