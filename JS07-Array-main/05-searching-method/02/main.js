const alphabets = ["a", "b", "a", "c", "a", "d"];

const findAllIndex = (arr, letter) => {
    let allIndex = [];
    let index = 0;
    while (true) {
        index =
            arr.indexOf(letter, index) !== -1 ? arr.indexOf(letter, index) : -1;
        if (index === -1) {
            return allIndex;
        } else {
            allIndex.push(index);
            index++;
        }
    }
};

findAllIndex(alphabets, "a");
