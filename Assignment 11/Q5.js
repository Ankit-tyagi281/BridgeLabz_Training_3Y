// Q5. Weather Activity Planner
const temperature = 28; // degrees Celsius
const isRaining = false;
const windSpeed = 12; // km/h

// Check rain first, then temperature and wind conditions.
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35 && !isRaining) {
    console.log("Go swimming.");
} else if ((temperature < 15 && windSpeed > 20) || (temperature < 5 && windSpeed > 10)) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}
