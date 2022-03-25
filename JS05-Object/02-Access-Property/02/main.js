function isEmpty(obj) {
    let empty = true;
    for (let key in obj) {
        empty = false;
    }
    return empty;
}

let person = {
    firstName: "peter",
};

let person2 = {};

console.log(isEmpty(person));
console.log(isEmpty(person2));
