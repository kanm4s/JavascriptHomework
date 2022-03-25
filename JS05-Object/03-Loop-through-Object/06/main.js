let productName = prompt("Enter product name");
let number = prompt("Enter number of product");
let pricePerPiece = prompt("Enter price per piece");
let discountInput = prompt("Enter discount");

function createObj(product, num, price, dc) {
    let obj = {
        product,
        num,
        price,
    };
    console.log(dc);
    if (+dc !== 0 && dc !== "") {
        obj.discount = dc;
    }

    return obj;
}

function calDiscount(obj) {
    return obj.price - (obj.price * obj.discount) / 100;
}

let newProduct = createObj(productName, number, pricePerPiece, discountInput);
console.log(newProduct);

console.log(calDiscount(newProduct));
