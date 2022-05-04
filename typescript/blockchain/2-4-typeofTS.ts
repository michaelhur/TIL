// These types are exclusive to Typescript, unavailable in Javascript.

// Sometimes you don't know what the type will be.
let a: unknown;
let b: a + 1; // this does not work because type of a is unknown

if (typeof a === 'number'){
    let b = a + 1
}

if (typeof a === 'string'){
    let b = a.toLocaleLowerCase();
}

// type void is for functions that do not return anything
// you do not specify the type in this case
function hello(){
    console.log("x")
}

