// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array

//The forEach() method does not create a new array based on the given array. The map() method creates an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.

// The map method is used for creating a new array, and thus, it’s chainable. You can call a number of map operations one after the other

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

const peopleFullName = persons.map((currentValue, index, arr) => {
  return [currentValue.firstname, currentValue.lastname].join(" ");
})
// Array 'persons' is mapped and actions of joining the first name and last name is performed
// This output is stored as another array and is returned once the map functions is executed
//So before complition os the map function nothing will be stored in the array 'peopleFullName' and in this case since its of the form const array 'peopleFullName' will not be initiated yet.

console.log(peopleFullName)

const num = [10,20,30,40,50]

const newNum = num.map((item)=>{
  return item * 5
})

console.log(newNum)