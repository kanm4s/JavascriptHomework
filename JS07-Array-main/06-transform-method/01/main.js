// const array = [1, 2, 30, 400];
// const newArr = array.map(ele => ele * 2)
// console.log(newArr)

// const array = [1, 2, 3, 4];
// const newArr = array.map(ele => String(ele));
// console.log(newArr)

// const array = [1, '1', 2, {}];
// const newArr = array.map(ele => typeof ele)
// console.log(newArr)

// const array = ['apple', 'banana', 'orange'];
// const newArr = array.map(ele => ele.toUpperCase())
// console.log(newArr)

// const array = [1, 3, 4, 5, 6, 7, 8];
// const newArr = array.map(ele => ele % 2 === 0 ? "even" : "odd")
// console.log(newArr)

// const array = [1, -3, 2, 8, -4, 5];
// const newArr = array.map(ele => ele >= 0 ? ele : ele * -1)
// console.log(newArr)

// const array = [100, 200.25, 300.84, 400.3];
// const newArr = array.map(ele => String(ele.toFixed(2)))
// console.log(newArr)

// const array = [0, 5, 10, 7, 6, 5, 0];
// const newArr = array.map(ele => {
//     const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
//     return month[ele]
// })
// console.log(month)

// const array = [1, 16, 81, 256, 625, 1296];
// const newArr = array.map((ele, index) => index+1)
// console.log(newArr)

// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
// ];

// const newArr = array.map(ele => ele.name)
// console.log(newArr)

// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
//   ];
// const newArr = array.map(ele => ele.age)
// console.log(newArr)

// const array = [
//     { name: 'apple', surname: 'London' },
//     { name: 'banana', surname: 'Bangkok' },
//     { name: 'watermelon', surname: 'Singapore' }
//   ];
// const newArr = array.map(ele => {
//     return `${ele.name} ${ele.surname}`
// })
// console.log(newArr)

// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-10' },
//     { name: 'watermelon', birth: '1985-12-30' }
//   ];

// const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// const newArr = array.map(ele => {
//     let splitBirth = ele.birth.split("-")
//     return `<tr><td>${ele.name}</td><td>${splitBirth[2]} ${month[splitBirth[1] - 1]} ${splitBirth[0]}</td></tr>`
// })
// console.log(newArr)
