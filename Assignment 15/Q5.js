// Q5: Prototype inheritance: Student inherits from Person.

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); // Initialize inherited property.
    this.branch = branch;
}

// Inherit Person.prototype methods and restore the constructor reference.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Ankit", "Computer Science");
student.showName();
student.showBranch();

console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true
