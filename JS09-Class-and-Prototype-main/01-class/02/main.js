class Sale {
    constructor(name) {
        this.name = name;
    }
    calcPrice() {
        let discountCal = this.discount.split("%")[0];
        return (this.price = this.price - (this.price * discountCal) / 100);
    }
}

class Beverage extends Sale {
    constructor(name, amount, price, discount) {
        super(name);
        this.amount = amount;
        this.price = price;
        this.discount = discount;
    }
}

let beverage = new Beverage("Pepsi", 3, 19, "10%");
console.log(beverage.calcPrice());
