const products = [
    { id: 1, name: "Crystal" },
    { id: 4, name: "Namthip" },
    { id: 5, name: "Nestle" },
];

let result = products.map((ele) => {
    let tmpObj = {};
    tmpObj.name = ele.name;

    let wholeObj = {};
    wholeObj[ele.id] = tmpObj;

    return wholeObj;
});

console.log(result);
