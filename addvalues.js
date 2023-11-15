function addValues(a, b) {
  return a + b;
}


// Test with numbers
let result1 = addValues(5, 10);
console.log("Result with numbers:", result1); // Output: 15

// Test with strings (concatenation will occur)
let result2 = addValues("Hello", "World");
console.log("Result with strings:", result2); // Output: HelloWorld

// Test with a number and a string (coercion will occur)
let result3 = addValues(5, "10");
console.log("Result with a number and a string:", result3); // Output: 510