// Q10. Citizen Eligibility Validator
const age = 22;
const isCitizen = true;

// Assumption: citizens aged 21+ qualify for all three services;
// citizens aged 18–20 qualify for voting only, as specified in the task.
if (isCitizen) {
    if (age >= 21 && age >= 18) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible due to age.");
    }
} else {
    if (age >= 18 || age === 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible due to age.");
    }
}
