// Kiểu dữ liệu trong TypeScript

let a: string
let b: number 
let c: boolean
let d: any
let e: string[] = ['a', 'b', 'c']; // number[], boolean[], any[]

let f: null
let g: undefined
let h: void // thường khai báo cho function - nghĩa là không chứa giá trị

enum Color { // mặc định sẽ là number và bắt đầu từ 0
    Red, 
    // Red = 'red'  
    Green, 
    // Green = 'green'
    Blue
    // Blue = 'blue'
}

let red = Color.Red;   


/************************************************    TypeAssertion    ******************************************/

let arr: string[] = [];
arr.push('hello word') // hiển thị các phương thức với array

console.log(arr)


let sum = ():void => {
    console.log('sum void: ', 1+2);
}
sum();


/***************** Ép kiểu ******************/
let str:any = 'hello world';
console.log( (<string>str).length);
str = (<string>str)
console.log(str.length);

