function add(a:number, b:number){
    return a+b;
}

const add2 = (a:number, b:number) => a+b

// call signature tells what the input type is and output type is

type Add = (a:number, b:number) => number; // this is a call signature of a function

const add3: Add = (a, b) => a + b; // this automatically infers that a and b are number