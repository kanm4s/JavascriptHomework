บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
let message = "Welcome to Thailand";

function logMessage(message) {
    message = "Hello everybody";
    console.log(message); // * ไม่มีผลลัพธ์อะไร เพราะยังไม่ได้เรียกใช้ function
}

logMessage(message);
console.log(message); // ** Welcome to Thailand
```

```js
let name = "John";

function sayHi(input) {
    console.log(name); // *** John
    name = input;
}

sayHi();
console.log(name); // **** undefined
```
