ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // * false เพราะ object ที่ถูกประกาศแยกกันจะไม่มีทางมีค่าเท่ากันได้ นอกจาก object จะถูก point ไปที่ object อีกตัวหนึ่ง เช่น let admin = user;
```