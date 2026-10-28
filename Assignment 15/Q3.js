// Q3: Arrow functions do not get their own 'this'.
// In a Node.js module, the arrow function inherits the surrounding 'this',
// so this.name is undefined here.

const user = {
    name: "Ankit",
    showName: () => {
        console.log("Arrow function name:", this.name); // undefined
    }
};

user.showName();

// Fix: use a normal method function, whose 'this' is the calling object.
const correctedUser = {
    name: "Ankit",
    showName: function () {
        console.log("Normal function name:", this.name); // Ankit
    }
};

correctedUser.showName();
