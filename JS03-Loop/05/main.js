let money = 100000;

for (let i = 0; i < 10; i++) {
    let interest = money * 0.025;
    money += interest;
}

console.log(money);
