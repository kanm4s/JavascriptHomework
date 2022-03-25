let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

function isValidNumber(value) {
    if (value === null) {
        return false;
    } else if (value.trim() === "") {
        return false;
    } else if (isNaN(value)) {
        return false;
    } else {
        return true;
    }
}

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid number");
} else {
    console.log(num1 + num2);
}
