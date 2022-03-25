let sumSalary = 0;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

for (let money in salaries) {
    sumSalary += salaries[money];
}
console.log(sumSalary);
