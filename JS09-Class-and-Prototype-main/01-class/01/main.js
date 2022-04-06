class Calculator {
    constructor(startValue = 0) {
        this.startValue = startValue;
    }

    sum(num) {
        return (this.startValue += num);
    }
    subtract(num) {
        return (this.startValue -= num);
    }
    multiply(num) {
        return (this.startValue *= num);
    }
    divide(num) {
        return (this.startValue /= num);
    }
    show() {
        alert(this.startValue);
    }
}

let cal = new Calculator(10);
cal.sum(5);
cal.subtract(5);
