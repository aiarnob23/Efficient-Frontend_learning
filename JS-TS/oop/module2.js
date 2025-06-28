// -----------------constructor without parameters-----------------//
class Test {
    constructor(){
       console.log("test class created");
    }
}

// let t1 = new Test();


// -----------------constructor with parameters-----------------//
class Person {
    num1=10
    num2=10
    constructor(a,b) {
        this.num1 = a;
        this.num2 = b;
    }

    sum(){
        return this.num1+this.num2;
    }
}

let p1 = new Person(15, 20);
console.log(p1.sum());