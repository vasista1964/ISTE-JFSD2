// Using var
function exampleVar() {
  if (true) {
    var varVariable = "I am a var variable";
  }
  console.log(varVariable); // varVariable is accessible outside the block scope
  varVariable = "Var variable reassigned";
  console.log(varVariable); // varVariable can be reassigned
}

// Using let
function exampleLet() {
  if (true) {
    let letVariable = "I am a let variable";
    console.log(letVariable); // letVariable is accessible within the block scope
    // Uncommenting the line below will result in an error
    // letVariable = "Let variable reassigned"; // Error: Cannot reassign a constant variable
  }
  // Uncommenting the line below will result in an error
  // console.log(letVariable); // Error: letVariable is not defined outside the block scope
}

// Using const
function exampleConst() {
  if (true) {
    const constVariable = "I am a const variable";
    console.log(constVariable); // constVariable is accessible within the block scope
    // Uncommenting the line below will result in an error
    // constVariable = "Const variable reassigned"; // Error: Cannot reassign a constant variable
  }
  // Uncommenting the line below will result in an error
  // console.log(constVariable); // Error: constVariable is not defined outside the block scope
}

// Run the examples
exampleVar();
exampleLet();
exampleConst();
