// These types are exclusive to Typescript, unavailable in Javascript.
// Sometimes you don't know what the type will be.
let a: unknown;
let b: a + 1; // this does not work because type of a is unknown

if (typeof a === 'number'){
    let b = a + 1;
}

if (typeof a === 'string'){
    let b = a.toLocaleLowerCase();
}

// type void is for functions that do not return anything
// you do not specify the type in this case
function hello(){
    console.log("x")
}

// type never
// never happens when a function never returns
function hi():never{
    throw new Error("xxx")
}

// never also happens if you a type that can be two things at once
function bye(name:string|number){
    if (typeof name === "string"){
        name // this is string
    } else if (typeof name === "number") {
        name // this is number
    } else {
        name // this is never, because this code should never run.
    }
}

