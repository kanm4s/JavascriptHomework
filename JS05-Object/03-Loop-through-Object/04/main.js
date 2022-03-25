function createObjFromProperties(obj) {
    let properties = {};
    for (let key in obj) {
        if (key !== "stop") {
            properties[key] = obj[key];
        }
    }
    return properties;
}

let person = {
    firstName: "Kan",
    surName: "Parker",
    age: 30,
    stop: "stop",
};

let newObj = createObjFromProperties(person);

console.log(newObj);
