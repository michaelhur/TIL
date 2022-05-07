// You can also use generics in other ways.

function superPrint<V>(a: V[]){
    return a[0]
}

// It is always better for Typescript to infer the type

// You can use generics to extend types
type Player<E> = {
    name: string
    extraInfo:E
}

const mike: Player<{favFood:string}> = {
    name:"mike",
    extraInfo: {
        favFood: "BK"
    }
}

type arrNumbers = Array<number>;
const a: arrNumbers = [1,2,3];

function printAllNumbers(arr: Array<number>){

}

// To use React with typescript:
// useState<number>() will declare type number