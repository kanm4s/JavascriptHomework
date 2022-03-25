let score = +prompt("Enter score:");

score >= 80
    ? console.log("A")
    : score >= 70
    ? console.log("B")
    : score >= 60
    ? console.log("C")
    : score >= 50
    ? console.log("D")
    : console.log("F");
