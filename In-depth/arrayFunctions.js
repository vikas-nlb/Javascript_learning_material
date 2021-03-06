var a = [1, 4, 5, 3, 2, 4, 5, 2];
var myName = ["V", "i", "k", "a", "s"];


console.log("Map function");
var map = a.map(a => a + 30);
console.log(map);

console.log("Filter function");
var filter = a.filter(a => a == 2 || a > 3);
console.log(filter);

console.log("Sort function");
var sortDes = a.sort((a, b) => a > b ? -1 : 1);
console.log("Descending order: " + sortDes);
var sortAsc = a.sort((a, b) => a > b ? 1 : -1);
console.log("Ascending order: " + sortAsc);

console.log("For each function");
var forEach = a.forEach(a => { console.log(a) });
console.log(forEach);

console.log("Every function - checks if the condition is true for all elements");
var every = a.every(a => a > 0);
console.log(every);

console.log("Some function - checks if the condition is true for at least one elements");
var some = a.some(a => a >= 6);
console.log(some);

console.log("Includes function");
var include = a.includes(4);
console.log(include);

console.log("Join function");
var join = myName.join('');
console.log(join);

console.log("Reduce function");
var reduce = a.reduce((sum, a) => sum = sum + a);
console.log(reduce);

console.log("Find function -returns the value of the first element in an array that pass the test in a testing function");
var find = a.find(a => a < 4);
console.log(find);

console.log("Find Index function - returns the index of the first element in an array that pass the test in a testing function.");
var indexOf = a.findIndex(a => a == 4);
console.log(indexOf);

console.log("Index of function - returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.");
var indexOf = a.indexOf(2);
console.log(indexOf);

console.log("Fill function - fills the elements in an array with a static value and returns the modified array.");
var empty = new Array(5);
console.log(empty.fill(10));

console.log("Reverse function");
var reverse = a.reverse();
console.log(reverse);

console.log("Push function");
var push = a.push(10);
console.log(a);

console.log("Pop function");
var pop = a.pop();
console.log(a);

console.log("Shift function - removes the first element from an array and returns that element.");
var shift = a.shift();
console.log(shift);

console.log("Unshift function - adds one or more elements to the beginning of an array and returns the new length of the array.");
var unshift = a.unshift(5);
console.log(unshift);
