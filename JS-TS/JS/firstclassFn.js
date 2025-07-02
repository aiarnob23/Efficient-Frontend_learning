//First class functions are functions that can be treated like any other variable. They can be passed as arguments, returned from other functions, and assigned to variables.

// Assigning a function to a variable
const greet = function() {
  console.log("Hello, World!");
};
greet();  // Output: Hello, World!


//Functions can be passed as arguments to other functions.
function  () {   //sayHello is a first-class function
  console.log("Hello, there!");
}

function executeFunction(fn) { // executeFunction is a higher-order function that takes a function as an argument
  fn();  // Executes the passed function
}

executeFunction(sayHello);  // Output: Hello, there!
