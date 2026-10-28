// Q10 — Nested Hoisting and Closures
"use strict";
function outer() {
    console.log("outer count before initialization:", count); // undefined: var hoisted in outer.
    var count = 5;
    function inner() {
        console.log("inner count before initialization:", count); // undefined: inner var shadows outer.
        var count = 10;
        console.log("inner count after initialization:", count); // 10
    }
    inner();
    console.log("outer count after inner():", count); // 5; separate local binding.
}
outer();

// Arrow-function version: with no inner count declaration, the arrow reads the outer lexical binding.
function outerWithArrow() {
    var count = 5;
    const inner = () => console.log("arrow reads outer count:", count);
    inner();
}
outerWithArrow();

// Each function call has its own execution context. Debug: breakpoint at first log, step over,
// inspect Watch for each count, and inspect Call Stack: outer -> inner -> outer resumes.
