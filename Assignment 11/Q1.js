// Q1. Personalized Login Greeting
const userName = "Ankit";
const currentHour = new Date().getHours();

// Choose a greeting based on the current local hour.
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
