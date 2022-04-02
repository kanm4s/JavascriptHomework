// function createObjFromProperties(obj) {
//     let properties = {};
//     for (let key in obj) {
//         if (key !== "stop") {
//             properties[key] = obj[key];
//         }
//     }
//     return properties;
// }

// let person = {
//     firstName: "Kan",
//     surName: "Parker",
//     age: 30,
//     stop: "stop",
// };

// let newObj = createObjFromProperties(person);

// console.log(newObj);

function createObj() {
    let keyInput = prompt("Enter key");
    let valueInput = prompt("Enter value");
    let obj = {};

    while (true) {
        if (keyInput === "stop" || valueInput === "stop") {
            return obj;
        } else {
            obj[keyInput] = valueInput;
            keyInput = prompt("Enter key");
            valueInput = prompt("Enter value");
        }
    }
    return obj;
}

let testobj = createObj();
console.log(testobj);
