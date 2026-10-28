// Q2. String Manipulation Report
const productName = " wireless headphones PRO ";

// Remove extra outer spaces and normalize the title to lowercase.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word.
const capitalizedName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace the word "Pro" with the requested edition label.
const cleanedTitle = capitalizedName.replace(/Pro\b/i, "Pro Edition");

console.log(`Cleaned product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
