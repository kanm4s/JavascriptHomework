const scores = [
    { score: 90, subject: "HTML", weight: 0.2 },
    { score: 95, subject: "CSS", weight: 0.3 },
    { score: 85, subject: "JavaScript", weight: 0.5 },
];

const result = scores.reduce((acc, ele) => {
    return acc === 0 ? acc + ele.score : Math.ceil((acc + ele.score) / 2);
}, 0);

console.log(result);
