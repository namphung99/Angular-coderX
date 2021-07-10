// Interface
// Class
// Access Modifiers: Public, Private, Protected
// Getter/Setter
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.drawPoint = function () {
        console.log("Draw a point at X: " + this._x + " and Y: " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value cannot be less than zero");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2); // new Point() => constructor được khởi tạo
// point.x = 10;
// point.y = 10;
console.log(point.x);
point.x = 10;
point.drawPoint();
