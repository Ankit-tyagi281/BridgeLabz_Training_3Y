'use strict';
// Q9 JSON Audit
const rawData = ['{"user":"Alex","age":25}', '{"id":2}', '{invalid}', '{"user":"Mina","age":"22"}'];
const cleanData = [], errors = [];
for (let i = 0; i < rawData.length; i++) {
 try {
  const parsed = JSON.parse(rawData[i]);
  if (!Object.prototype.hasOwnProperty.call(parsed, 'user') || !Object.prototype.hasOwnProperty.call(parsed, 'age')) throw new Error('Missing required key: user or age');
  const age = Number(parsed.age);
  if (typeof parsed.user !== 'string' || !parsed.user.trim() || !Number.isFinite(age) || age < 0) throw new Error('Invalid user or age');
  cleanData.push({ ...parsed, age });
  console.log('Line ' + (i + 1) + ': valid');
 } catch (error) { errors.push({ line: i + 1, input: rawData[i], message: error.message }); console.log('Line ' + (i + 1) + ': ERROR — ' + error.message); }
}
console.log('Clean data:', cleanData);
console.log('Errors:', errors);
console.log('Users under 18:', cleanData.filter(user => user.age < 18));
// Debug: malformed JSON jumps to catch, then the loop continues with the next record.
