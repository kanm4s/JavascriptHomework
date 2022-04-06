function cloneObject(obj) {
    return { ...obj };
}

let obj1 = { a: 1, b: 2 };

let obj2 = cloneObject(obj1);
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
