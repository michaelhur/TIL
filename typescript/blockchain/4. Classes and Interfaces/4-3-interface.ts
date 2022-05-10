abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}
    abstract sayHi(name: string): string
}

class Player extends User {
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// we use abstract class to dictate how classes extends from abstract class should behave
// However, javascript does not have abstract class.

// So we will use interface!
interface Users {
    firstName: string
    lastName: string
    sayHi(name: string): string
    fullName(): string
}

interface Human {
    health: number
}

// a class can implement multiple interfaces
class Players implements Users, Human {
    constructor(
        public firstName: string, // you cannot have private nor protected type when you are implementing
        public lastName: string,
        public health: number
    ) {}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// You can also use interface as a type or return an Interface

function makeUser(users: Users): Users {
    return {
        firstName: "mike",
        lastName: "hur",
        fullName: () => "xx",
        sayHi: (name) => "string"
    }
}

makeUser({
    firstName: "mike",
    lastName: "hur",
    fullName: () => "xx",
    sayHi: (name) => "string"
})