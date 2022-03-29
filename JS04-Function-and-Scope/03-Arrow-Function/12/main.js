let factorial = (num) => {
    let result = num;
    for (let i = num - 1; i > 0; i--) {
        result *= i;
    }
    return result;
};

const factorialRecursive = (number) =>
    number === 0 || number === 1 ? 1 : number * factorialRecursive(number - 1);
