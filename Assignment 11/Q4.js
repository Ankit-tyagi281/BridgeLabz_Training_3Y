// Q4. Academic Performance Evaluator
// Each subject is marked out of 100.
const marks = [88, 91, 79, 84, 90];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailedSubject = marks.some(mark => mark < 35);

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

// A failing subject overrides the overall percentage.
if (hasFailedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !hasFailedSubject) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
