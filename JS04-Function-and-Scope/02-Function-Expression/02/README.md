บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const showModal = alert;
showModal("Execute modal"); // * alert ข้อความ execute model
```

```js
const showModal = alert();
showModal("Execute modal"); // ** ขึ้น error showmodal ไม่ใช่ function
```
