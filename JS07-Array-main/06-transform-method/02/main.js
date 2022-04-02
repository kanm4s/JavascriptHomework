const toCamelCase = (word) => {
    let split = word.split("-");
    let splitCamelCase = split[1].split("");
    let camelCase = splitCamelCase.map((ele, index) =>
        index === 0 ? ele.toUpperCase() : ele
    );
    return `${split[0]}${camelCase.join("")}`;
};

toCamelCase("background-color");
