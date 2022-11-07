// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

//The forEach() method does not create a new array based on the given array. The map() method creates an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.

let sum = 0;
const numbers = [65, 44, 12, 4];
const a = numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum)

console.log(a) // Output : undefined as forEach returns undefined unlike map which returns an array
