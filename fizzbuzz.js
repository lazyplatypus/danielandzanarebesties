function fizzbuzz(count){
    let array = [];
    for (let i=1; i <= count; i++)
    {
        if (i % 15 == 0)
            array.push("FizzBuzz");
        else if (i % 3 == 0)
            array.push("Fizz");
        else if (i % 5 == 0)
            array.push("Buzz");
        else
            array.push(i);
    }
    return array
}

module.exports = fizzbuzz