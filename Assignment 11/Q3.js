// Q3. Monthly Expense Tracker
const expenses = {
    food: 4500,
    travel: 1800,
    rent: 8000,
    bills: 1200,
    leisure: 1500
};

let totalExpense = 0;

// Add every category expense to the running total.
for (const category in expenses) {
    totalExpense += expenses[category];
}

const averageExpense = totalExpense / Object.keys(expenses).length;
const taxRate = 0.10;
const taxAmount = totalExpense * taxRate;
totalExpense += taxAmount; // Add 10% tax using an assignment operator.

console.log("Monthly expense report");
console.log(`Subtotal: ₹${(totalExpense - taxAmount).toFixed(2)}`);
console.log(`Average expense per category: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${totalExpense.toFixed(2)}`);
