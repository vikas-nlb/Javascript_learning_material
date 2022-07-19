//The while loop loops through a block of code as long as a specified condition is true.

//The main difference between for loop and while loop is that in for loop the number of iterations to be done is already known and is used to obtain a certain result whereas in while loop the command runs until a certain condition is reached and the statement is proved to be false.

let i = 0;
// while (i < 10) {
//   console.log("The number is " + i);
//   i++;
// }

let a = [1, 2, 3, 4, 5, 6, 7, 8]
let b = []
let len = a.length
for (let i = 0; i < len; i++) {
  b.push(a.pop())
}
a.push(12)
console.log(b)
