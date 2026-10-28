"use strict";
// Q5 — Hoisting Lab: The Sequence Trap
// Original sequence output:
// console.log(score); // undefined: var declaration is hoisted, initialization is not.
// announce(); // Prints "Game started": function declarations are hoisted.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame(); // Prints "ready": status is initialized before this call.
// function startGame() { console.log(status); }
// Corrected, easy-to-read version:
const score = 50;
const status = "ready";
function announce() { console.log("Game started"); }
function startGame() { console.log(status); }
console.log(score);
announce();
startGame();
// Arrow functions assigned to const are not callable before their declaration is initialized.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status + " (arrow)");
announceArrow();
startGameArrow();
// var is hoisted as undefined; let/const have a temporal dead zone before initialization;
// function declarations are hoisted. Arrow functions follow their const/let binding rules.
