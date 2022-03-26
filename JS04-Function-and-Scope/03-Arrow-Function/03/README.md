บรรทัดที่มี \* , \*\*ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefined เพราะไม่ได้ return
```

```js
const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** 28.274333882308138 ได้ค่าออกมาเพราะว่า หากอยู่บรรทัดเดียวกันไม่จำเป็นต้อง return
```
