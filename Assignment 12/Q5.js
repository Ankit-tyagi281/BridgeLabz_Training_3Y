"use strict";
// Q5 — Hoisting Lab: The Sequence Trap
// Original sequence notes:
// console.log(score); // var is hoisted and initialized to undefined.
// announce(); // Function declaration is hoisted and can run here.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }
// In the original order startGame reads status in its temporal dead zone, so it throws ReferenceError.
const score = 50;
const status = "ready";
function announce() { console.log("Game started"); }
function startGame() { console.log(status); }
console.log(score);
announce();
startGame();
// Arrow functions assigned to const are not callable before initialization.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status + " (arrow)");
announceArrow();
startGameArrow();
// var is hoisted as undefined; let/const have a temporal dead zone; function declarations are hoisted.
// Arrow functions follow their const/let binding's initialization rules.
