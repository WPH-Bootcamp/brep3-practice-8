var count = 5;
var naming = "Alice";
var u1 = { name: "Alice", age: 25 };
var u2 = { name: "Bob", age: 30 };
function greet(name) {
    console.log("Hello, ".concat(name));
}
function add(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
var multiply = function (a, b) { return a * b; };
var biodata = {
    name: "Charlie",
    age: 28,
    address: "123 Main St",
};
var numbers = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number;
};
var roles = ["admin", "user"];
var dataRole = "user";
function identity(value) {
    return value;
}
var nomor = identity(42);
// nomor = 'hello';
console.log(typeof identity(42));
console.log(typeof identity("Hello"));
console.log(typeof identity(["Hello"]));
