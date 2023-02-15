// Functions declaration

function sayHello() {
    console.log("hello!")
}

sayHello()

function sayHelloTo(name) {
    console.log(`hello ${name}`)
}

sayHelloTo("Mike")

function returnHi() {
    return "Hi!";
}

const greeting = returnHi();
console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo("Jonh"))