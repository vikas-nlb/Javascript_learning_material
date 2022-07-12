//Arrow functions introduce concise body syntax, or implicit return. This allows the omission of the curly brackets and the return keyword. Implicit return is useful for creating succinct one-line operations in map , filter , and other common array methods.

// Normal Function in JavaScript
function normalWelcome() {
  console.log("Normal function");
}

// Arrow Function
const arrowWelcome = () => {
  console.log("Normal function");
};

//Implicit return
hello = () => "Hello World!";
console.log(hello());

//If you have parameters, you pass them inside the parentheses
helloVal = (val) => "Hello " + val;
console.log(helloVal("JavaScript"));

//f you have only one parameter, you can skip the parentheses as well
helloNum = (number) => "Hello " + number;
console.log(helloNum(10));
