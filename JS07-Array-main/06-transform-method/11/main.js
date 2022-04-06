// let str = "I live in Thailand";

// const toNoneDuplicate = (sentence) => {
//     let tmp = [];
//     let split = sentence.split("");

//     // add to set to check duplicate and fix to lower case
//     let toSet = new Set(split.map((ele) => ele.toLowerCase()));
//     tmp = Array.from(toSet);

//     // fix white space
//     let indexWhiteSplace = tmp.findIndex((ele) => ele === " ");
//     tmp.splice(indexWhiteSplace, 1);

//     return tmp;
// };

// let noneDupArr = toNoneDuplicate(str);

// const countChar = (arr, sentence) => {
//     let textForCheck = sentence.split("");
//     let tmp = {};
//     arr.forEach((ele) => {
//         let count = textForCheck.filter((char) => char === ele).length;
//         tmp[ele] = count;
//     });
//     return tmp;
// };

// countChar(noneDupArr, str);

let str = "I live in Thailand";

let split = str.split(" ").join("").split("");
console.log(split);

let result = split.reduce((acc, ele) => {
    acc[ele] ? (acc[ele] = acc[ele] + 1) : (acc[ele] = 0);
}, {});
console.log(result);
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
