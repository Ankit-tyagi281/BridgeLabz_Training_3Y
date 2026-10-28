// Q4. Array Performance Analyzer
// Generate eight random integer scores from 30 through 100.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Use map() to create a display-friendly list of scores.
const displayedScores = scores.map((score, index) => ({
    student: index + 1,
    score
}));

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter(score => score >= 50).length;

console.log("Student scores:");
console.table(displayedScores);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed (50 or above): ${passedStudents}`);
