let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
const sorted = arr.sort((a, b) => b - a);
console.log(`Highest: ${sorted[0]}, Lowest: ${sorted[sorted.length - 1]}`);
