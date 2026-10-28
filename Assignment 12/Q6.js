// Q6 — Pyramid Pattern Generator
"use strict";
const rawLimit = process.argv[2];
const parsedLimit = rawLimit === undefined ? 5 : Number(rawLimit);
const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? Math.min(parsedLimit, 50) : 5;
console.log(`Pyramid pattern (rows: ${limit})`);
for (let row = 1; row <= limit; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) line += "* ";
    console.log(line.trimEnd());
}
// Replace let with var to compare: printed output stays the same for this synchronous loop,
// but var is function-scoped and may be reused outside the loop; let is block-scoped.
// Debug row and column step-by-step; watch line after each inner iteration.
// Strict mode throws ReferenceError if an undeclared loop variable is used.
// Run node "Q6.js" 7 to request 7 rows; default is 5 (maximum 50).
