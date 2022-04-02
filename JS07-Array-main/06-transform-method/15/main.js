let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

const getAverageAge = (arr) => {
    let average = arr.reduce((acc, ele) => {
        return acc + ele.age;
    }, 0);
    return (average / arr.length).toFixed(2);
};

getAverageAge(arr);
