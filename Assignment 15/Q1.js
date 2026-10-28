// Q1: Demonstrate callback flow.
// greetUser prints a greeting, then calls the callback.

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greetUser("Ankit", showEndMessage);

// Output:
// Hello Ankit
// Welcome to the course!
