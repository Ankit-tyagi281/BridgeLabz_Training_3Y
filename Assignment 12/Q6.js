// Q6. Event-Based Counter Simulation
let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// Nested function accesses and updates the count from its outer scope.
function demonstrateNestedScope() {
    function addTwo() {
        count += 2;
        console.log(`Count after nested addTwo(): ${count}`);
    }

    addTwo();
}

// Simulate clicks by calling the functions.
increment();
increment();
decrement();
demonstrateNestedScope();
