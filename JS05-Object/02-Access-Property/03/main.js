const product1 = {
    name: "Water",
    distributor: {
        name: "Giraffe Water Company",
        address: {
            street: "Phetchaburi",
            subdistrict: "Thanonphetchaburi",
            district: "Ratchathewi",
            province: "Bangkok",
        },
    },
};

let product2 = {};
let distributor2 = product1.distributor;

product2.distributor = distributor2;

console.log(product1.distributor.address.province);
console.log(product2.distributor.address.province);
