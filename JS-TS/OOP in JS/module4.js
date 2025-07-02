// ----------------static keyword-------------------//

// static is used to define methods and properties that belong to the class itself,
//usecases : Shared properties, Utility functions , Memory efficiency
//  not instances of the class
class Person {
    static x = 21;

    static getX() {
        return this.x;
    }
}

console.log(Person.x);
