var Sum = function (a, b) {
    return a + b;
};
console.log(Sum(6, 5));
var user = function (users) {
    return users;
};
var users = [
    { name: 'a', age: 22 },
    { name: 'b', age: 22 },
];
console.log(user(users));
// Anonymous function
var anonymousFunction = function (x, y) {
    return y + x;
};
var arrowFunction = function (x, y) {
    return y + x;
};
console.log(arrowFunction(22, 'nam nay toi: '));
console.log(anonymousFunction(2, 'nam'));
