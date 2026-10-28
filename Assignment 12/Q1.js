// Q1. Scope Conflict Resolver
// Global bonus is accessible throughout this script.
let bonus = 5000;

function calculateSalary(isPermanent) {
    // salary is local to this function.
    let salary = 40000;

    // The global bonus is added only for permanent employees.
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${salary}`);
}

// Test both cases to show how the local parameter affects the calculation,
// without changing the global bonus variable.
calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains: ₹${bonus}`);
