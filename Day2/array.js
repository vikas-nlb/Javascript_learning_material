// Array is a type of object
//Array is a collection of mix data types , it can be of any one data type or a mix of data types
// We can access array through index and it starts with zero
// Allows multiple operations and below a few are listed

var a = [1, 4, 5, 3, 2, 4, 5, 2];
var myName = ["V", "i", "k", "a", "s"];

console.log("Sort function");
var sortDes = a.sort((a, b) => (a > b ? -1 : 1));
console.log("Descending order: " + sortDes);
var sortAsc = a.sort((a, b) => (a > b ? 1 : -1));
console.log("Ascending order: " + sortAsc);

console.log("Includes function");
var include = a.includes(4);
console.log(include);
// output : true as number 4 is present in the decalred array

console.log("Join function");
console.log(myName.join());
// output: "V,i,k,a,s"

console.log(myName.join(""));
// output: "Vikas"

console.log(myName.join("-"));
// output: "V-i-k-a-s"

console.log("Reverse function");
var reverse = a.reverse();
console.log(reverse);

console.log("Pop function");
var pop = a.pop();
console.log(a);

console.log("Push function");
var push = a.push(10);
console.log(a);


