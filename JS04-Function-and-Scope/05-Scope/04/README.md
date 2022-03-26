ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
let x = 1;
function func() {
  console.log(x); // * จะเกิด reference error เพราะ x ถูกประกาศทีหลัง ในกรณีที่ ตัวแปรชื่อเหมือนกัน function จะเรียกใช้ variable ใน function
  let x = 2;
}
func();
```