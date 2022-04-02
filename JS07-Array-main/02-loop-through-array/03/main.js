const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 },
];

// for (let ele of sales) {
//     // if discount existed discount first
//     if (ele.discount) {
//         //create tmp object to add array
//         let tmp = {};
//         tmp.netPrice = ele.price - ele.price * ele.discount;
//         summary[index] = tmp;
//         index++;
//     } else {
//         let tmp = {};
//         tmp.netPrice = ele.price;
//         summary[index] = tmp;
//     }
// }

const calcDiscount = (arr) => {
    let tmpArr = [];

    arr.forEach((element, index) => {
        if (element.discount) {
            let tmpObj = {};
            tmpObj.netPrice = element.price - element.price * element.discount;
            tmpArr[index] = tmpObj;
        } else {
            let tmpObj = {};
            tmpObj.netPrice = element.price;
            tmpArr[index] = tmpObj;
        }
    });
    return tmpArr;
};

const summary = calcDiscount(sales);
console.log(summary);

/////////////////////////////////////

// const summary = [];
// for (let el of sales) {
//     summary[summary.length] = {
//         netPrice: el.price * (1 - (el.discount ? el.discount : 0)),
//     };
// }
