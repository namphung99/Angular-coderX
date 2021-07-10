const Sum = (a:number, b:number) : number => {
     return a + b;
}

console.log(Sum(6,5));

const user = (users:any) : any[] => { // kiểu đối tượng
    return users;
}

const users = [
    {name: 'a', age:22},
    {name: 'b', age:22},
]
console.log(user(users));

// Anonymous function

const anonymousFunction = function(x:number, y:string) : string {
    return y + x;
}

const arrowFunction = (x:number, y:string) : string =>{
    return y + x;
}

console.log(arrowFunction(22,'nam nay toi: '))
console.log(anonymousFunction(2,'nam'))