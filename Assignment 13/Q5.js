"use strict";
// Q5 — Hoisting Lab: The Sequence Trap
// console.log(score); // var is hoisted and initialized to undefined.
// announce(); // Function declaration is hoisted and prints "Game started".
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame(); // In the original order, this prints ready because status is initialized before call.
// function startGame() { console.log(status); }
// Corrected version:
const score = 50;
const status = "ready";
function announce() { console.log("Game started"); }
function startGame() { console.log(status); }
console.log(score);
announce();
startGame();
// Arrow functions assigned to const cannot be called before initialization.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status + " (arrow)");
announceArrow();
startGameArrow();
// var is hoisted as undefined; let/const have a temporal dead zone; function declarations are hoisted.
