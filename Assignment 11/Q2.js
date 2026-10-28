// Q2. Multi-Type Data Summary
const userName = "Ankit";
const userAge = 21;
const isStudent = true;
const skills = ["JavaScript", "HTML", "CSS"];
const userProfile = { city: "Mathura", course: "Engineering" };
const middleName = null;
let optionalValue;

// Array.isArray() is needed because typeof arrays returns "object".
const dataSummary = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "userAge", value: userAge, type: typeof userAge },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "skills", value: JSON.stringify(skills), type: Array.isArray(skills) ? "array" : typeof skills },
    { label: "userProfile", value: JSON.stringify(userProfile), type: typeof userProfile },
    { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "optionalValue", value: String(optionalValue), type: typeof optionalValue }
];

console.table(dataSummary);
