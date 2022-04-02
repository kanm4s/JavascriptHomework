let str = "I live in Thailand";

const toNoneDuplicate = (sentence) => {
    let tmp = [];
    let split = sentence.split("");

    // add to set to check duplicate and fix to lower case
    let toSet = new Set(split.map((ele) => ele.toLowerCase()));
    tmp = Array.from(toSet);

    // fix white space
    let indexWhiteSplace = tmp.findIndex((ele) => ele === " ");
    tmp.splice(indexWhiteSplace, 1);

    return tmp;
};

let noneDupArr = toNoneDuplicate(str);

const countChar = (arr, sentence) => {
    let textForCheck = sentence.split("");
    let tmp = {};
    arr.forEach((ele) => {
        let count = textForCheck.filter((char) => char === ele).length;
        tmp[ele] = count;
    });
    return tmp;
};

countChar(noneDupArr, str);
