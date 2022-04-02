const persons = [
    { name: "John", sex: "M" },
    { name: "Jody", sex: "M" },
    { name: "Susan", sex: "F" },
    { name: "Kate", sex: "F" },
    { name: "Sid", sex: "M" },
];

const groupGender = (arr) => {
    let tmp = {};
    let M = [];
    let F = [];
    let sort = arr.forEach((ele) => {
        if (ele.sex === "M") {
            M.push(ele.name);
        } else {
            F.push(ele.name);
        }
    });
    tmp.M = M;
    tmp.F = F;
    return tmp;
};

groupGender(persons);
