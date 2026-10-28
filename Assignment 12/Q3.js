// Q3 — Transaction Validator
"use strict";
const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];
const validTransactions = [];
const invalidTransactions = [];
class TransactionValidationError extends Error {
    constructor(type, message) { super(message); this.name = type; this.type = type; }
}
for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];
    try {
        if (transaction === null || transaction === undefined)
            throw new TransactionValidationError("NullEntryError", "Transaction is null or undefined.");
        if (transaction.id === undefined || transaction.amount === undefined)
            throw new TransactionValidationError("MissingFieldError", "Transaction is missing id or amount.");
        if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount))
            throw new TransactionValidationError("InvalidAmountError", "Amount must be a finite number.");
        if (transaction.amount < 0)
            throw new TransactionValidationError("NegativeAmountError", "Amount cannot be negative.");
        validTransactions.push(transaction);
        console.log(`Transaction ${index + 1}: VALID`, transaction);
    } catch (error) {
        invalidTransactions.push({ index: index + 1, transaction, errorType: error.type || error.name, message: error.message });
        console.log(`Transaction ${index + 1}: INVALID [${error.name}] ${error.message}`);
    }
}
console.log("Valid:", validTransactions);
console.log("Invalid:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}; Failed: ${invalidTransactions.length}`);
// Debug: breakpoint inside try; watch index, transaction, validTransactions, invalidTransactions.
