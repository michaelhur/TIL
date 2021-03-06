// Interfaces are very similar to types
// But it is different in 2 ways.

// we can declare types in following ways!
// type Team = "red" | "blue" | "yellow";
// type Health = Number;
//
// type Player = {
//     nickname: string
//     healthBar: Health
//     team: Team
// }
//
// const nico: Player = {
//     nickname: "nico",
//     team: 'red',
//     healthBar: 10
// }

// or we can do...
// interface Person {
//     nickname: string
//     healthBar: Health
//     team: Team
// }

// interface is used to declare "shape" of an object
// type is more versatile than interface

interface User {
    name: string
}

interface Player extends User {
}

// const nico: Player = {
//     name: "Nico"
// }

// In type we will do:
//
// type User = {
//     name: string
// }
//
// type Player = User & {
// }
//
// const nico: Player = {
//     name: "Nico"
// }

// in interfaces, you can also accumulate!
interface User {
    age: number
}

interface User {
    adult: boolean
}

const nico: Player = {
    name: "nico",
    age: 20,
    adult: true
}