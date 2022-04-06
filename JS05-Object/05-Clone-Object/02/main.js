const state1 = {
    username: "john",
    point: 100,
    loading: true,
};

let obj = Object.assign({}, state1, {
    point: 75,
    loading: false,
    success: true,
});

console.log(obj);
