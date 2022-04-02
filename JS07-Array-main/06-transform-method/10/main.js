let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

const toNoneDuplicate = (arr) => {
    let tmp = [];

    arr.forEach((ele) => {
        if (tmp.find((name) => name === ele)) {
            return false;
        } else {
            tmp.push(ele);
            return true;
        }
    });

    return tmp;
};

const allName = toNoneDuplicate(names);

const countName = (arr) => {
    let tmpObj = {};
    arr.forEach((ele) => {
        console.log(ele);
        let count = names.filter((name) => name === ele);
        tmpObj[ele] = count.length;
    });
    return tmpObj;
};

console.log(countName(allName));
