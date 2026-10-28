"use strict";
// Q4 — Debugging Mystery: corrected version.
// Original code fails because greeting is assigned without declaration.
// In strict mode, that assignment throws ReferenceError instead of creating a global.
// function showMessage() { greeting = "Welcome"; console.log(greeting); }
// showMessage();
function showMessage() {
    const greeting = "Welcome";
    const watchMessage = greeting; // Add watchMessage to VS Code's Watch panel.
    console.log(watchMessage);
}
showMessage();
// Scope: const declares a function-local binding; strict mode disallows accidental globals.
// Debug: breakpoint on console.log; watch greeting/watchMessage and inspect Call Stack.
