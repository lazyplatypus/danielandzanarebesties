let fizzbuzz = undefined

try { fizzbuzz = require('../fizzbuzz') }
catch(e) {
    throw new Error("FIZZBUZ AINT FIZZIN' - DANIEL");
}

console.log("we're fizzin")
