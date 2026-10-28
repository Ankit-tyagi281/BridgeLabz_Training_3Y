"use strict";
// Q8 — Strict Mode Showdown
// Original duplicate parameters may be accepted in sloppy classic scripts, but are a SyntaxError
// in strict mode. In sloppy mode, total = 10 can create an implicit global; strict mode throws
// ReferenceError. delete total is a SyntaxError in strict mode (and cannot delete a local binding).
// function demo(a, a) { total = 10; delete total; }
// demo(5, 10);
// Correct ES6 version: use unique parameters, declare variables, and delete object properties only.
function demo(first, second) {
    let total = 10;
    console.log(`first=${first}, second=${second}, total=${total}`);
    total = first + second;
    console.log("Updated total:", total);
    const record = { temporary: true };
    delete record.temporary;
    console.log("Property removed:", !("temporary" in record));
}
demo(5, 10);
// Compare sloppy mode only in a separate non-strict classic script; ES modules are strict by default.
// A syntax error prevents the original function from running at all.
