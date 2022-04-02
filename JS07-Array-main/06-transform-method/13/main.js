let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
let toUnique = new Set(alphabets);
let result = Array.from(toUnique);
console.log(result);
