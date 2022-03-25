function sayHi(age) {
    if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * function sayHi(age) { if (age < 12) alert("Hi kid")

console.log(sayHi(10)); // ** ขึ้น alert "hi kid" แต่console.log undefined

function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;
    } else {
      return "Who are you";
    }
  }

  console.log(sayHi("John")); 
  console.log(sayHi());