//Arrow functions introduce concise body syntax, or implicit return. This allows the omission of the curly brackets and the return keyword. Implicit return is useful for creating succinct one-line operations in map , filter , and other common array methods.

// Normal Function in JavaScript
function normalWelcome() {
  console.log("Normal function");
  return 10
}
console.log(normalWelcome())
// Arrow Function
const arrowWelcome = (a,b) => {
  let sum = a + b
  return sum
};
arrowWelcome(10,20)

//Implicit return
hello = (a,b) => sum = a+b
console.log(hello(10,20));

//If you have parameters, you pass them inside the parentheses
helloVal = (val) => "Hello " + val;
console.log(helloVal("JavaScript"));

//If you have only one parameter, you can skip the parentheses as well
helloNum = number => "Hello " + number;
console.log(helloNum(10));
