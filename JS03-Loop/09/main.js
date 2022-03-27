let firstPlayer = prompt("Enter number Between 1-99");
let checkFirstPlayer = true;

while (checkFirstPlayer) {
    if (!isNaN(firstPlayer)) {
        if (firstPlayer < 1 || firstPlayer > 99) {
            firstPlayer = prompt("Enter number Between 1-99");
        } else {
            checkFirstPlayer = false;
        }
    } else {
        firstPlayer = prompt("Enter number Between 1-99");
    }
}

let guess = true;

while (guess) {
    let secondPlayer = prompt("Guess number");

    if (secondPlayer === firstPlayer) {
        console.log("correct");
        guess = false;
    } else if (secondPlayer < firstPlayer) {
        console.log("Too less");
    } else if (secondPlayer > firstPlayer) {
        console.log("Too much");
    }
}
