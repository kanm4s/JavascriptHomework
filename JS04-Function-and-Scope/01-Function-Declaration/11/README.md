บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * function sayHi(age) { if (age < 12) alert("Hi kid")
}
console.log(sayHi(10)); // ** ขึ้น alert "hi kid" แต่console.log undefined
```

```js
function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** ขึ้น alert "Hi John" console.log undefined เพราะไม่ได้ return ค่าออกมา
console.log(sayHi()); // **** console.log "Who are you"
```
