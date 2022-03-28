function Accumulator(currentValue) {
    (this.currentValue = currentValue),
        (this.read = function () {
            this.num = prompt("Enter number");
            this.currentValue += +this.num;
        }),
        (this.show = function () {
            alert(this.currentValue);
        });
}

let acc = new Accumulator(0);
acc.read();
acc.read();
acc.show();
