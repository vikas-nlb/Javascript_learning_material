// map() creates a new array from calling a
// function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array

//The forEach() method does not create a new array based on the given array. The map() method creates an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.


const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

const peopleFullName = persons.map((currentValue, index, arr) => {
  return [currentValue.firstname, currentValue.lastname].join(" ");
});

console.log(peopleFullName)
