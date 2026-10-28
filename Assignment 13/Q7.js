'use strict';
// Q7 Smart Calculator
const operations = ['add', 'divide', 'power', 'root', 'subtract'];
const num1 = 25, num2 = 0;
for (const op of operations) {
 try {
  let result;
  switch (op) {
   case 'add': result = num1 + num2; break;
   case 'divide': if (num2 === 0) throw new Error('Cannot divide by zero'); result = num1 / num2; break;
   case 'power': result = num1 ** num2; break;
   case 'root': if (num1 < 0) throw new Error('Root of negative number'); result = Math.sqrt(num1); break;
   case 'subtract': result = num1 - num2; break;
   default: { const error = new Error('Invalid operation'); error.name = 'InvalidOperationError'; throw error; }
  }
  console.log(op + ': ' + result);
 } catch (error) { console.log(op + ': ' + error.name + ' — ' + error.message); }
}
