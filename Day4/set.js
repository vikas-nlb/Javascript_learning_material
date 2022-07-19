let a = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8] // An array with duplicate values

console.log(a) // consoling array 'a'

// Set is of type object and lets you save unique values of any types
let b = [...new Set(a)]
//We created a new Set with inout as array 'a'.
//This will take the array 'a' and store only the unique values in the new set
//Then we are spreading '...' the created set , which basically destructures the object
//This destructured object is inturn stored inside an array
//Thereby creating a new array 'b' which will contain only unique values of 'a'

console.log(b) //consoling the array 'b'