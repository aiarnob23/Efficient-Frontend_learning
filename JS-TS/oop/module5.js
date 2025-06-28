// -----------Inheritance-----------//

class Father {
  house = 1;

  homeProperty() {
    return `Father has ${this.house} house`;
  }
}


class Son extends Father {
  car = 2;
  homeProperty() {
    return ` Son has ${this.house} house(s) and ${this.car} car(s)`;
  }
}

let s1 = new Son();
console.log(s1.homeProperty());
  

// -----------constructor inside only child class-----------//
class Son2 extends Father {
    constructor(){
        super();
        console.log("Son2 class created");
    }
}

new Son2()

// -----------------------POLYMORPHISM--------------------------//
// -------------------method overriding-------------------//
class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

const animal = new Animal();
animal.speak(); 

const dog = new Dog();
dog.speak();     


// ---------------overloading methods------------------//
class Calculator {
    add(a, b) {
        if (arguments.length === 1) {
            return a + a; 
        } else if (arguments.length === 2) {
            return a + b;
        }
    }
}

const calc = new Calculator();
console.log(calc.add(5));    
console.log(calc.add(5, 10)); 