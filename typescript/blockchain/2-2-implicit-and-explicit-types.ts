// Typescript로 type 지정하는 방법
// 1. implicit
let person = 2; // typescript will infer that this is a number. i.e. person : number

// 2. explicit
let people : string = '1234'; // here we specify that people is of string type

// Downside of typescript
let c = [1, 2, 3];
c.push("1");

// in javascript, this is legal and will return [1, 2, 3, "1"].
// but typescript assumes that c is an array of number and returns type error.
