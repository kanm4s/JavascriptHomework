function Calculator() {
    (this.read = function () {
        this.num1 = prompt("Enter first number");
        this.num2 = prompt("Enter second number");
    }),
        (this.sum = function () {
            return +this.num1 + +this.num2;
        }),
        (this.mul = function () {
            return this.num1 * this.num2;
        });
}

let cal = new Calculator();
cal.read();
alert(cal.sum());
alert(cal.mul());
