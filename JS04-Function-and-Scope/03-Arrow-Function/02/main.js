let primeNumber = (num1) => {
    let count = 0;
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            count += 1;
        }
    }
    if (count === 2) {
        return true;
    }
    return false;
};

primeNumber(5); //true
primeNumber(4); //false
