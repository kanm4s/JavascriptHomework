function fixKeyName(obj) {
    for (let key in obj) {
        if (obj[key] > 1) {
            obj[`${key}s`] = obj[key];
            delete obj[key];
        }
    }
}

let fruit = {
    apple: 2,
    lime: 1,
    banana: 2,
};

fixKeyName(fruit);
console.log(fruit);
