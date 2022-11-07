// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

//The forEach() method does not create a new array based on the given array. The map() method creates an entirely new array. The forEach() method returns “undefined“. The map() method returns the newly created array according to the provided callback function.

// The forEach method doesn’t return anything, so you can’t chain it with any other methods—it’s not chainable.

let sum = 0;
const numbers = [65, 44, 12, 4];

const a = numbers.forEach((item) => {
  sum += item;
});


 console.log(sum) // consoles the sum of all the numbers in the array 'numbers'

 console.log(a) // Output : undefined as forEach returns undefined unlike map which returns an array


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

listOfCities.forEach((element) => {
  console.log('The city is :'+element.city)
  console.log('The country is :'+element.country)
})

listOfCities.forEach(forEachElement)

function forEachElement(element){
  console.log('The city is :'+element.city)
  console.log('The country is :'+element.country)
}

const arr = [10,20,30,40,50]

 arr.forEach((num,index) => {
  console.log(num,index)
})
