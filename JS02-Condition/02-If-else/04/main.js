let num = prompt("Enter number:");

if (+num > 0) {
    console.log("Positive number");
} else if (num === "0") {
    console.log("Zero");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Invalid number");
}
