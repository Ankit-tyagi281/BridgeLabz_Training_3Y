// Q4: Share a method between Car instances through the prototype.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const carOne = new Car("Toyota", "Corolla");
const carTwo = new Car("Honda", "Civic");

carOne.getDetails();
carTwo.getDetails();

// Both objects use the same shared prototype method.
console.log(carOne.getDetails === carTwo.getDetails); // true
