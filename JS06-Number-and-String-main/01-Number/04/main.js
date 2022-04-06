// let twoPoint = (num) => {
//     return num.toFixed(2); // may be error can't use toFixed
// };

function trunc2(num) {
    return (Math.trunc((num * 100).toFixed(2)) / 100).toFixed(2);
}

function to2Digit(num) {
    // convert num to string first (1.2, 1.4123 , 2)
    // split string . => array ["1","2"], ["1","4123"], ["2"]
    const splitted = String(num).split(".");
    if (splitted[1] && splitted[1].length > 2) {
        return splitted[0] + "." + splitted[1].slice(0, 2);
    }
    return num.toFixed(2);
}
