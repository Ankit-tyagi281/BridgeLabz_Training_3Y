// Q2 — Employee Bonus Calculator
"use strict"; // Prevent accidental implicit globals.
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];
for (const employee of employees) {
    try {
        if (!employee || !("name" in employee) || !("salary" in employee) || !("years" in employee)) {
            throw new Error("Employee is missing name, salary, or years.");
        }
        const salary = Number(employee.salary);
        const years = Number(employee.years);
        if (!Number.isFinite(salary) || !Number.isFinite(years) || salary < 0 || years < 0) {
            throw new TypeError("Salary and years must be valid non-negative numbers.");
        }
        const bonus = salary * (years > 3 ? 0.10 : 0.05);
        console.log(`${employee.name}: Salary ₹${salary.toFixed(2)}, Experience ${years} years, Bonus ₹${bonus.toFixed(2)}, Total ₹${(salary + bonus).toFixed(2)}`);
    } catch (error) {
        console.log(`Employee record error: ${error.message}`);
    }
}
// Debug: inspect employee, salary, years, and bonus in the debugger.
