'use strict';
// Q8 Strict Mode Showdown
// Duplicate parameters are a SyntaxError in strict mode. Assigning undeclared total throws
// ReferenceError; deleting an unqualified variable is illegal in strict mode.
// Original: function demo(a, a) { total = 10; delete total; }
function demo(first, second) {
 let total = 10;
 console.log('first=' + first + ', second=' + second + ', total=' + total);
 total = first + second;
 console.log('Updated total:', total);
 const record = { temporary: true };
 delete record.temporary;
 console.log('Property removed:', !('temporary' in record));
}
demo(5, 10);
// Compare sloppy mode only in a separate non-strict classic script; ES modules are strict by default.
