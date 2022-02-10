//Works, because of hoisting
//function add is initialized before console.log calls it
console.log(add(2, 8))

function add(x, y) {
    return x + y
}

//Anonymous function, because it does not need a name
const addVariable = function /*add*/ (x, y) {
    return x + y
}

console.log(addVariable)

const addArrowFunction = (x, y) => x + y

//val addArrow = (_ + _)

//A Callback is passing a function to another function as an argument
//Executeable code passed as a parameter

function doActionWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name)
}

//running, fishing, passing

const running = (name) => console.log(`${name} is running`)
const passing = (name) => `${name} is passing`

console.log(doActionWithSomeone(running, "Rasmus"))
//console.log() returns void if it cannot log datatype, happens when you call console.log twice
//const passing = (name) => console.log(`${name} is passing`)
//const oneLiner = (funtionReference, name) => console.log(funtionReference(name))
//This will result in "undefined" in the terminal

const oneLiner = (funtionReference, name) => console.log(funtionReference(name))
oneLiner(passing, "Rasmus")


const chicken = {
    sound : "Cluck cluck"
}

console.log(chicken.sound) //Dot notation intelliSense
console.log(chicken["sound"]) //Square bracket notation