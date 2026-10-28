// Q1 — Dynamic Data Parser
"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];
for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberForm = Number(value);
    const booleanForm = Boolean(value);
    const stringForm = String(value);
    const blank = typeof value === "string" && value.trim() === "";
    const valid = value !== null && value !== undefined && !blank &&
        typeof value !== "boolean" && Number.isFinite(numberForm) &&
        !(typeof value === "string" && value.trim().toLowerCase() === "nan");
    const report = { index: i, original: value, number: numberForm, boolean: booleanForm, string: stringForm };
    if (valid) { validNumericData.push(numberForm); console.log("[VALID]", report); }
    else {
        invalidNumericData.push({ original: value, reason: Number.isNaN(numberForm) ? "Number conversion is NaN" : "Blank/null/undefined or unsupported numeric input" });
        console.log("[INVALID]", report);
    }
}
console.log("Valid numeric data:", validNumericData);
console.log("Invalid data:", invalidNumericData);
console.log(`Summary: ${validNumericData.length} valid, ${invalidNumericData.length} invalid.`);
// Debug: breakpoint in loop; watch value, numberForm, and valid.
