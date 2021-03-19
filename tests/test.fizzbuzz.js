let fizzbuzz = undefined

try { fizzbuzz = require('../fizzbuzz.js') }
catch(e) {
    throw new Error("FIZZBUZ AINT FIZZIN' - DANIEL");
}

let fizzbuzzing = fizzbuzz(10)
let test_output = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

if (fizzbuzzing.length == test_output.length
    && fizzbuzzing.every(function(u, i) {
        return u === test_output[i];
    })
) {
    let payloadSuccess = [{
        "eventType":"Commit",
        "pass":true,
    }];
    process.env.PAYLOAD = JSON.stringify(payloadSuccess);
    console.log("Yay! 🎉🎉🎉🎉🎉🎉🎉🍾")
}
else {
    let payloadFail = [{
        "eventType":"Commit",
        "pass":false,
    }];
    process.env.PAYLOAD = JSON.stringify(payloadFail);
    throw new Error(`You're not fizzing well - Zan - Got: ${fizzbuzzing}, was expecting: ${test_output}.`)
}
