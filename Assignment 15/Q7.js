// Q7: A closure remembers the multiplier from its outer function.

function makeMultiplier(multiplier) {
    // The returned function keeps access to 'multiplier' after this call ends.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure: each returned function remembers its own multiplier value.
