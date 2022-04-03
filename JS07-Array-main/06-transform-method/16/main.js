// const persons = [
//     { name: "John", sex: "M" },
//     { name: "Jody", sex: "M" },
//     { name: "Susan", sex: "F" },
//     { name: "Kate", sex: "F" },
//     { name: "Sid", sex: "M" },
// ];

// const groupGender = (arr) => {
//     let tmp = {};
//     let M = [];
//     let F = [];
//     let sort = arr.forEach((ele) => {
//         if (ele.sex === "M") {
//             M.push(ele.name);
//         } else {
//             F.push(ele.name);
//         }
//     });
//     tmp.M = M;
//     tmp.F = F;
//     return tmp;
// };

// groupGender(persons);

const persons = [
    { name: "John", sex: "M" },
    { name: "Jody", sex: "M" },
    { name: "Susan", sex: "F" },
    { name: "Kate", sex: "F" },
    { name: "Sid", sex: "M" },
    { name: "Test", sex: "ddd" },
];

const groupGender = (arr) => {
    let result = arr.reduce((acc, ele) => {
        if (acc[ele.sex]) {
            acc[ele.sex].push(ele.name);
        } else {
            acc[ele.sex] = [ele.name];
            console.log(acc);
        }
        return acc;
    }, {});
    return result;
};

groupGender(persons);
