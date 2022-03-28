function multiplyNumeric(obj, num) {
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] *= num;
        }
    }
}

let menu = {k
    width: 200,
    height: 300,
    title: "My menu",
};
multiplyNumeric(menu, 3);
console.log(menu);
