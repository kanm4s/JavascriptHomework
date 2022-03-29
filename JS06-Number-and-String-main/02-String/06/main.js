let extractCurrencyValue = (string, rate) => {
    let cutDollar = string.substring(1, string.length);
    return +cutDollar * rate;
};

// let findWord = (letter, sentence) => {
//     let lower = sentence.toLowerCase();
//     let count = 0;
//     let index = 0;
//     for (let l of lower) {
//         if (l === letter) {
//             count++;
//             console.log(index);
//         }
//         index++;
//     }
//     return count;
// };

let findWord = (letter, sentence) => {
    let lowerSentence = sentence.toLowerCase();
    let count = 0;
    let index = 0;
    while (true) {
        if (lowerSentence.includes(letter, index)) {
            let tmpPosition = lowerSentence.indexOf(letter, index);
            count++;
            index = tmpPosition + letter.length;
        } else {
            return count;
        }
    }
};
