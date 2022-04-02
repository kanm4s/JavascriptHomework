let copySorted = (arr) => {
    let clone = arr.slice(0);
    return clone.sort();
};

let arr = ["React", "Vue", "Angular"];
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
