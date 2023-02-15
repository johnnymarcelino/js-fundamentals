// Function expression
const increment = function(n){
    return n + 1;
}

// Arrow Function is always anonymous
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n =>  n + 1

console.log(increment(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

const sum = (a, b) => a + b;
console.log(sum(2, 6));

(function (){
    let x = 300
    console.log(x)
})();

(() => {
    console.log("arrow #01")
})();

(() => console.log("arrow #02"))();