// Higher-order functions (HOFs) are functions that take other functions as arguments or return them as output.

// Example of a higher-order function
function greet(name) {
  return function(message) {
    console.log(`${message}, ${name}!`);
  }; 
}

const greetJohn = greet("John");
greetJohn("Hello"); // Output: Hello, John! 

// Example of a higher-order function that takes a function as an argument
function processArray(arr, callback) {
  return arr.map(callback);
}   

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, function(num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Example of a higher-order function that returns a function
function createMultiplier(factor) {
  return function(num) {
    return num * factor;
  };
}   
const double = createMultiplier(2);
const triple = createMultiplier(3); 
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15   

