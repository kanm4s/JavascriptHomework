const tasks = [
    { id: 1, name: "Fishing" },
    { id: 2, name: "Shopping" },
    { id: 3, name: "Swimming" },
];

const deleteTask = (num) => {
    tasks.find((element, index) => {
        if (num === element.id) {
            tasks.splice(index, 1);
        }
    });
};

deleteTask(1);
console.log(tasks);

const deleteTask = (tasks) => {
    return tasks.filter((task) => task.id !== id);
};
