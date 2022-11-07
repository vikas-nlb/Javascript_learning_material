// Spread Operator
//It spreads the elements of an array or an object , which allows us to copy part or whole array or object into another array or object

// add the elements of an existing array into a new array
const a = [1,2,3,4]
const b = [5,6,...a]
console.log(b)

// pass elements of an array as arguments to a function
function add(x,y,z){
    return x+y+z
}
const c = [1,2,3]
console.log(add(...c))

//Merging array or objects
const d = [1,2,3,4]
const e = [5,6,7,8]
const f = [...d,...e]
const animal = {
    age:7,
    color:'white and black',
    height:'4 feet'
}
const animalWithBreed = {
    ...animal,
    breed:'not sure'
}
console.log(animalWithBreed)
console.log(f)

//Destructuring an object
const car = {
    name:'Honda',
    model:'BR-V',
    color:'Red',
    cost:150000
}
let {cost,...restOfCar} = car
console.log(cost)


//Rest operator
//Condenses multiple elements into an array
//Instructs the computer to add the rest of the user-supplied values into an array

function multiply(multiplier,...numArr){
    return numArr.map((num)=>{
        return num * multiplier
    })
}
console.log(multiply(5,10,30,50,150))