const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

let result = inventory.find((element) => element.name === "cherries");
console.log(result);
