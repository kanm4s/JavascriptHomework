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

const checkSpam = function (str) {
    const lowerString = str.toLowerCase();
    if (lowerString.includes("xxx")) return true;
    if (lowerString.includes("porn")) return true;
    if (lowerString.includes("sex")) return true;
    return false;

    const checkWord = ["xxx", "porn", "sex"];
    return checkWord.includes(lowerString);
};
