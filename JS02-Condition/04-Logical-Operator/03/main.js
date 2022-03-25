let user = prompt("Enter Username");
let password;

if (user === "") {
    user = "guest";
} else if (user === "codecamp") {
    password = prompt("Enter Password");
} else {
    user = "guest";
}

if (password === "123456") {
    user = "codecamp";
} else if (user === "guest") {
} else {
    alert("Wrong password");
}

alert(`Welcome ${user}`);
