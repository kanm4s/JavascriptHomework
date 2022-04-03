// const products = [
//     { id: 1, name: "Crystal" },
//     { id: 4, name: "Namthip" },
//     { id: 5, name: "Nestle" },
// ];

// let result = products.map((ele) => {
//     let tmpObj = {};
//     tmpObj.name = ele.name;

//     let wholeObj = {};
//     wholeObj[ele.id] = tmpObj;

//     return wholeObj;
// });

// console.log(result);

const products = [
    { id: 1, name: "Crystal" },
    { id: 4, name: "Namthip" },
    { id: 5, name: "Nestle" },
];

const toFormat = (arr) => {
    let result = arr.reduce((acc, ele) => {
        let tmp = {};
        tmp.name = ele.name;
        acc[ele.id] = tmp;
        return acc;
    }, {});

    return result;
};

console.log(toFormat(products));
