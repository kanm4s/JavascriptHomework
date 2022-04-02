const tasks = [
    { id: 1, name: "Fishing" },
    { id: 2, name: "Shopping" },
    { id: 3, name: "Swimming" },
];

const updateTask = (id, newName) => {
    tasks.forEach((element) => {
        if (element.id === id) {
            element.name = newName;
        }
    });
};
updateTask(2, "Travelling");
console.log(tasks[1]);

// function updateTask(id, newName) {
//     const idx = tasks.findIndex(task => task.id === id)
//     if (idx !== -1) {
//         tasks[idx].name = newName;
//     } else {
//         console.log("Task with this id is not found");
//     }
// }
