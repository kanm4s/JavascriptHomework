let employee = prompt("Enter Name");

const employees = {
  john: {
    "key": 234982749
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

let found = false;

for (let key in employees) {
  if (employee === key) {
    console.log(`Name: ${key}, salary: ${employees[key].salary}, address: ${employees[key].address.district}, ${employees[key].address.province}`);
    found = true
  }
}

if (!found) {
  console.log('Not Found')
}


// console.log(`Name: ${employees[key]}, salary: ${employees[key.salary]}, address:${employees[key.address.district]}, ${employees[key.address.province]}`);