// Q8. Employee Salary Projection
const currentSalary = 30000;
const annualIncrementRate = 8; // percentage
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    // Increase the salary by the annual percentage.
    projectedSalary *= 1 + annualIncrementRate / 100;
    projectedSalary = Math.round(projectedSalary * 100) / 100;

    salaryProjection.push({
        year: `Year ${year}`,
        salary: projectedSalary.toFixed(2)
    });
}

console.table(salaryProjection);
