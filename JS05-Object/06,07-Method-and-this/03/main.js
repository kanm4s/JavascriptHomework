let calculator = {
    // ... your code ...
    read() {
        this.num1 = prompt("Enter num1");
        this.num2 = prompt("Enter num2");
    },
    sum() {
        return +this.num1 + +this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// function Calculator() {
//     this.read = function () {
//         this.num1 = prompt("Enter num1");
//         this.num2 = prompt("Enter num2");
//     };
//     this.sum = function () {
//         return +this.num1 + +this.num2;
//     };
//     this.mul = function () {
//         return this.num1 * this.num2;
//     };
// }

// const calculator = new Calculator();
// calculator.read()
// calculator.sum()
// calculator.mul()
