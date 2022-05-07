// polymorphism basically refers to a function that takes many forms

// example: create a function that takes an array and returns each item one by one
type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void
    (arr: string[]): void // we cannot add every single type!
}

const superPrint: SuperPrint =  (arr) => {
    arr.forEach(i => console.log(i));
}

superPrint([1,2,3,4])
superPrint([true, false, false, true])
superPrint(["1", "2", "3"])
superPrint([1,2,false,true]) // will not work
// So we can to tell typescript we want a "generic type" instead of "concrete type."

type SuperPrint2 = {
    <T>(arr: T[]):void
}

const superPrint2: SuperPrint2 =  (arr) => {
    arr.forEach(i => console.log(i));
}

superPrint2([1,2,3,4])
superPrint2([true, false, false, true])
superPrint2(["1", "2", "3"])
superPrint2([1,2,false,true]) // will not work

type SuperPrint3 = {
    <T>(arr: T[]): T
}

const superPrint3: SuperPrint3=  (arr) => arr[0]

const a = superPrint3([1,2,3,4])
const b = superPrint3([true, false, false, true])
const c = superPrint3(["1", "2", "3"])
const d = superPrint3([1,2,false,true])