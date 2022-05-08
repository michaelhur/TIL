// We are going to learn about OOP
class Player {
    constructor(
        private firstName: string,
        protected lastName: string,
        public nickname: string
    ) {}
}

const mike = new Player("mike", "hur", "마이크");
mike.firstName // will not work because firstName is private;
mike.nickname

// we can create abstract class which other classes can inherit from, but cannot create a new instaence of!

abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        public nickname: string
    ) {
    }
    abstract getNickName():void // abstract class can have an abstract method
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// abstract method is something that you want all the classes that extends from the abstract class to implement
class newPlayer extends User {
    getNickName() {
        console.log(this.nickname);
    }
}

const michael = new newPlayer("mike", "hur", "마이크");

michael.nickname;
michael.getNickName()
michael.getFullName()

