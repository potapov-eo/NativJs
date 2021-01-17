/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example:
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
    let result = 0
        if (num < 10) {
        return 0
    }
    while (num >= 10) {
        num = num.toString().split("").map(Number).reduce((accum, n) => accum * n, 1)
        result = result + 1
    }
    return result
}

console.log(persistence(25))