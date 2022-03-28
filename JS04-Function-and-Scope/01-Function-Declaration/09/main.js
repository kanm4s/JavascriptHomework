function isPrimeNumber(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count += 1;
        }
    }
    return count === 2 ? true : false;
}

console.log(isPrimeNumber(0));