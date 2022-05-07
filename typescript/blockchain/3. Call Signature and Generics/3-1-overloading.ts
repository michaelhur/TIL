// type Add = (a:number, b:number) => number; // this is a call signature of a function

// or we can do:
type Add = {
    (a: number, b: number): number
    (a: number, b: string): number
}

const add: Add = (a, b) => {
    if (typeof b === 'string')  return a;
    return a+b;
} // this automatically infers that a and b are number

// We can also have call signature with different number of parameters
type Addition = {
    (a: number, b: number): number
    (a: number, b: number, c?: number): number
}

// typescript is complaining
// so we have to specify that c is optional -> c?: number
const addition:Addition = (a, b, c?:number) => {
    if (c) return a + b + c
    return a + b
}

addition(1,2)
addition(1,2,3);