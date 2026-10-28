// Q9: Compare prototype-based inheritance and ES6 class inheritance.

// Version 1: Constructor functions and prototypes (same pattern as Q5).
function PersonPrototype(name) {
    this.name = name;
}
PersonPrototype.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function StudentPrototype(name, branch) {
    PersonPrototype.call(this, name);
    this.branch = branch;
}
StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;
StudentPrototype.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const prototypeStudent = new StudentPrototype("Ankit", "Computer Science");
console.log("Prototype version:");
prototypeStudent.showName();
prototypeStudent.showBranch();

// Version 2: ES6 classes use extends and super() for the same relationship.
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls the Person constructor.
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const classStudent = new Student("Ankit", "Computer Science");
console.log("ES6 class version:");
classStudent.showName();
classStudent.showBranch();

// Both versions provide the same behavior and inheritance relationship.
console.log(prototypeStudent.name === classStudent.name); // true
console.log(prototypeStudent.branch === classStudent.branch); // true
