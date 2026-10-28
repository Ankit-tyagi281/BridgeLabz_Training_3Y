// Q8. Dynamic Discount Evaluator
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedSubtotal = 0;
const itemReport = [];

// Apply each item's category-specific discount.
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    const finalItemPrice = product.price - discount;
    discountedSubtotal += finalItemPrice;

    itemReport.push({
        item: product.item,
        category: product.category,
        originalPrice: product.price.toFixed(2),
        discountPercent: `${discountRate * 100}%`,
        finalPrice: finalItemPrice.toFixed(2)
    });
}

// Apply an additional 5% to the discounted subtotal when original cart value exceeds 50,000.
const extraDiscountRate = originalTotal > 50000 ? 0.05 : 0;
const extraDiscount = discountedSubtotal * extraDiscountRate;
const finalTotal = discountedSubtotal - extraDiscount;

console.table(itemReport);
console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Extra cart discount: ${extraDiscountRate * 100}%`);
console.log(`Extra discount amount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final cart total: ₹${finalTotal.toFixed(2)}`);
