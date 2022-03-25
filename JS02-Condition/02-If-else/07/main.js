let userName = prompt("Enter username:");
let password = prompt("Enter Password:");
console.log(userName);
console.log(password);

if (userName === "" || password === "") {
    console.log("username and password are required");
} else if (userName === "admin" && password === "1234") {
    console.log(`Hello ${userName}`);
} else if (userName === "john" && password === "qwerty") {
    console.log(`Hello ${userName}`);
} else {
    console.log("invalid username or password");
}
