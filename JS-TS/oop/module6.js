// ----------------------Abstraction---------------------------//
// Abstraction is one of the key concepts in Object-Oriented Programming (OOP). It refers to the idea of hiding the complex implementation details of a system while exposing only the essential features or functionalities. In simple terms, abstraction allows you to focus on what an object does, rather than how it does it.

// Key Concepts of Abstraction:
// Hiding Complexities: Only the essential details are exposed to the user, and the complex implementation is hidden.

// Simplifying Interfaces: Abstraction makes it easier to interact with objects by providing simpler interfaces.

// Reducing Complexity: By focusing only on relevant data and functions, abstraction reduces the complexity of the code and makes it easier to maintain.

// Types of Abstraction:
// Abstract Classes (Used in many OOP languages like Java and C#)

// Abstract Methods (Methods that are declared in an abstract class but don't have an implementation)

// In JavaScript, we don't have explicit abstract classes as in languages like Java or C#. However, we can still achieve abstraction through base classes and method overriding.


class Animal {
    constructor(name) {
        if (this.constructor === Animal) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
    }

    // Abstract method (not implemented here)
    speak() {
        throw new Error("Method 'speak()' must be implemented.");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // Providing implementation for the abstract method
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog("Tommy");
dog.speak(); // Output: Tommy barks