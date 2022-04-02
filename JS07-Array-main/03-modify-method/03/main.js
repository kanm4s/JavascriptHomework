let animals = ["Dog", "Cat", "Rat"];

animals.push("Fish");
animals.unshift("Horse");
animals.splice(animals.length, 0, "Giraffe", "Snake");
console.log(animals);

animals.shift();
animals.pop();
animals.shift();

console.log(animals); //[ 'Cat', 'Rat', 'Fish', 'Giraffe' ]
