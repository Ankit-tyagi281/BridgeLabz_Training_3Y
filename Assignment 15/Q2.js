// Q2: Use callback functions to apply operations to an array.

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, number => number * 2);
const squaredNumbers = applyOperation(numbers, number => number ** 2);

console.log("Doubled:", doubledNumbers); // [2, 4, 6, 8]
console.log("Squared:", squaredNumbers); // [1, 4, 9, 16]
