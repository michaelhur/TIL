// Example: create own word dictionary

type Words = {
    [key: string]: string // this is useful when you know the type of the property in advance, but don't know the name of it.
}

// let dict: Words = {
//     "potato": "food",
//     "rice": "food",
//     "coke": "drink"
// }

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word){
        if (this.words[word.term] === undefined){
            this.words[word.term] = word.definition
        }
    }
    def(term: string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term: string, // to make it public but not modifiable, we add readonly
        public definition: string
    ){}
}

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi")