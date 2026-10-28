// Q7. Smart Guessing Game
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Test value: change this to try other guesses.

console.log(`Your guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // A difference of 3 or less means the guess is very close.
    const difference = Math.abs(userGuess - secretNumber);
    if (difference <= 3 && userGuess >= 1 && userGuess <= 50) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log(`Secret number (for testing): ${secretNumber}`);
