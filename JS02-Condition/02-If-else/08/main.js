let score = +prompt("Enter score:");

if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else if (score >= 50) {
    console.log("D");
} else if (score > 0) {
    console.log("F");
} else {
    console.log("score must be greater than and equal to 0.");
}
