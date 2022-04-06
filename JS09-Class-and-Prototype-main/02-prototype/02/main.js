Function.prototype.defer = function (time) {
    setTimeout(() => this(), time);
};

function f() {
    alert("Hello!");
}
f.defer(1000);
