// you can also decalre 'readonly type'
// meaning that it will not be modified

type Player = {
    readonly name: string, // we can go deeper, and declare type Name: string, and replace "name: string" with "name: Name"
    age?: number
}

const playerMaker = (name:string) : Player => ({name});


const nico = playerMaker("nico");
nico.name = 'Mike';

const numbers: readonly number[] = [1,2,3,4];
numbers.push(1); // will not work because numbers is readonly;

// To create tuple, in which we must have a specific type at each position:
const player: [string, number, boolean] = ["1", 1, false]; // must have 3 arguments!
player[0] = 1// will not work because first element must be string

let a: undefined = undefined;
let b: null = null;

let c: number | string = "1";
c = 1234;
