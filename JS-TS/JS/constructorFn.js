//Constructor function is a function that is used to create objects.
// It is called with the 'new' keyword, which creates a new object and sets its prototype.

//example 1
function cookieCutter(){
    this.width = 12;
    this.height = 22;
    this.color = 'brown';
    this.taste = 'sugary';
}

biscuit1 = new cookieCutter();
console.log(biscuit1);

//example 2
function circularButton(color){
    this.radius = 5;
    this.height = 10;
    this.width = 10;
    this.color = color;
}

button1 = new circularButton('red');
console.log(button1);
button2 = new circularButton('blue');
button2.text = 'Click Me';
console.log(button2);

