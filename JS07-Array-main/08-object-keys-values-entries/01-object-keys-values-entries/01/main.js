let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = Object.values(salaries);

const sumValues = (obj) => {
    let value = Object.values(obj);
    let result = value.reduce((acc, ele) => {
        return acc + ele;
    }, 0);
    return result;
};
