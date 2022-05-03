let a: number = 1;
let b: string = "i1";
let c: boolean[] = [true, false, true] // [] implies that it is an array

// you can also implicitly decalre type
const player = {
    name: "mike"
}

// what if some players have age, and some don't?
const player1 : {
    name: string,
    age?: number // declaring type with ?: indicates that it may be a number or undefined.
} = {
    name: "mike"
}

if (player1.age < ){} // will give an error that player 1 does not have age

if (player1.age && player1.age < 10){
    console.log("this!")
}

// what if we want to create multiple players? what do we do?

const player2 : {
    name: string,
    age?: number
} = {
    name: "nico"
}

const player3 : {
    name: string,
    age?: number
} = {
    name: "mike"
}

// here we are repeating ourselves, and this is very inefficient.
// so we can define a type, and use it repeatedly.

type Player = {
    name: string,
    age?: number
}

const playerMike : Player = {
    name: "Mike"
}

const playerErin : Player = {
    name: "Erin"
}

