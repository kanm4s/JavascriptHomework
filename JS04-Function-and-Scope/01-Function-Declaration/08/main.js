function login(username, password) {
    if (username === "admin" && password === "P@ssw0rd") {
        console.log("Login success.");
    } else {
        console.log("Login not success.");
    }
}

login("admin", "P@ssw0rd");
