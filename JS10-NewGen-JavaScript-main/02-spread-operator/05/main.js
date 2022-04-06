function removeRandom(...arr) {
    let result = arr;
    let random = Math.floor(Math.random() * arr.length);
    result.splice(random, 1);
    return result;
}

console.log(removeRandom(1, 2, 3, 4, 5, 6, 7, 8, 9));
