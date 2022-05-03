const michael = {
    nickname: "mike"
}

michael.hello() // will give an error because michael does not have a property 'hello'
michael.nickname = 123 // will give an error because michael's nickname must be 'string'

[1,2,3,4] + false // javascript gives '1,2,3,4false'. it somehow converts an array and boolean in to string and addes them

function divide(a, b) {
    return a, b
}

divide(1234) // divide is expecting 2 arguments but only has one