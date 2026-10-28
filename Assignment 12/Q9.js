// Q9 — JSON Audit
"use strict";
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];
const cleanData = [];
const errors = [];
for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    try {
        const parsed = JSON.parse(rawData[index]);
        if (!Object.prototype.hasOwnProperty.call(parsed, "user") ||
            !Object.prototype.hasOwnProperty.call(parsed, "age")) {
            throw new Error("Missing required key: user or age.");
        }
        const age = Number(parsed.age);
        if (typeof parsed.user !== "string" || parsed.user.trim() === "" || !Number.isFinite(age) || age < 0) {
            throw new Error("Invalid user or age value.");
        }
        cleanData.push({ ...parsed, age });
        console.log(`Line ${lineNumber}: valid JSON record`);
    } catch (error) {
        errors.push({ line: lineNumber, input: rawData[index], message: error.message });
        console.log(`Line ${lineNumber}: ERROR — ${error.message}`);
    }
}
const under18Users = cleanData.filter(record => record.age < 18);
console.log("Clean data:", cleanData);
console.log("Audit errors:", errors);
console.log("Users under 18:", under18Users);
// Debug: breakpoint before JSON.parse. Malformed JSON jumps to catch; loop continues to next line.
