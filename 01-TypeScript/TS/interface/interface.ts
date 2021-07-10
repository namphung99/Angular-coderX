// Interface

// Class

// Access Modifiers: Public, Private, Protected

// Getter/Setter
class Point { // mặc định là Public
   private _x: number;
   private _y: number;

    constructor(_x: number, _y: number){
        this._x = _x;
        this._y = _y;
    }

    drawPoint (){ 
        console.log(`Draw a point at X: ${this._x} and Y: ${this._y}`);
    }

    get x() { 
        return this._x; 
    }

    set x(value: number) {
        if(value < 0){
            throw new Error("value cannot be less than zero");
        }

        this._x = value;
    }
}

let point = new Point(1, 2); // new Point() => constructor được khởi tạo
// point.x = 10;
// point.y = 10;
console.log(point.x);
point.x= 10;
point.drawPoint();
