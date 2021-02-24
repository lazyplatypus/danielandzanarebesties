let fizzbuzz = undefined

try { fizzbuzz = require('../fizzbuzz') }
catch(e) {
    throw new Error("FIZZBUZ AINT FIZZIN' - DANIEL");
}

let fizzbuzzing = fizzbuzz(10)
let test_output = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

if(fizzbuzzing != test_output){
    throw new Error(`You're not fizzing well - Zan - Got: ${fizzbuzzing}, was expecting: ${test_output}.`)
}

console.log("Yay! 🎉🎉🎉🎉🎉🎉🎉🍾")

