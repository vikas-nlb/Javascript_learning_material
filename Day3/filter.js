// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const b = a.filter((item) => item > 2);

console.log("a>2 :" + b);

const c = a.filter((item) => item > 3 && item < 7);
console.log("a>3 and a < 7 :" + c);

const d = a.filter((item) => item % 2 === 0);
console.log("Even numbers" + d);

const listOfCities = [{
    city: 'Bangalore',
    country:'India'
}, {
    city: 'Mumbai',
    country:'India'
},{
    city: 'California',
    country:'USA'
}] // array of objects

const usaCities = listOfCities.filter((element) => element.country === "India")
console.log(usaCities)
 




