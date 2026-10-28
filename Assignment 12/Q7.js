// Q7 — Smart Calculator
"use strict";
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
class InvalidOperationError extends Error {
    constructor(operation) { super(`Unknown operation: ${operation}`); this.name = "InvalidOperationError"; }
}
class CalculationError extends Error {
    constructor(message) { super(message); this.name = "CalculationError"; }
}
function calculate(operation, first, second) {
    switch (operation) {
        case "add": return first + second;
        case "divide":
            if (second === 0) throw new CalculationError("Cannot divide by zero.");
            return first / second;
        case "power": return first ** second;
        case "root":
            if (first < 0) throw new CalculationError("Cannot calculate real square root of a negative number.");
            return Math.sqrt(first);
        case "subtract": return first - second;
        default: throw new InvalidOperationError(operation);
    }
}
console.log("SMART CALCULATOR SUMMARY");
for (const operation of operations) {
    try {
        console.log(`${operation.toUpperCase()}: ${calculate(operation, num1, num2)}`);
    } catch (error) {
        console.log(`${operation.toUpperCase()}: ERROR — ${error.name}: ${error.message}`);
    }
}
try { calculate("modulus", num1, num2); }
catch (error) { console.log(`UNKNOWN OPERATION TEST: ${error.name}: ${error.message}`); }
