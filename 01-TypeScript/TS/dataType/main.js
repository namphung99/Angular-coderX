// Kiểu dữ liệu trong TypeScript
var a;
var b;
var c;
var d;
var e = ['a', 'b', 'c']; // number[], boolean[], any[]
var f;
var g;
var h; // thường khai báo cho function - nghĩa là không chứa giá trị
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    // Red = 'red'  
    Color[Color["Green"] = 1] = "Green";
    // Green = 'green'
    Color[Color["Blue"] = 2] = "Blue";
    // Blue = 'blue'
})(Color || (Color = {}));
var red = Color.Red;
/************************************************    TypeAssertion    ******************************************/
var arr = [];
arr.push('hello word'); // hiển thị các phương thức với array
console.log(arr);
var sum = function () {
    console.log('sum void: ', 1 + 2);
};
sum();
/***************** Ép kiểu ******************/
var str = 'hello world';
console.log(str.length);
str = str;
console.log(str.length);
