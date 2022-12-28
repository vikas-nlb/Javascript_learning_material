
//Promise
// Promise is a special type of object that helps you work with asynchronous operations.
// Many functions will return a promise to you in situations where the value cannot be retrieved immediately.

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

//Promise take 2 parameters , resolve and reject
//Resolve -> As the name suggests gets called when the execution is a success
//Reject -> As the name suggests gets called when the execution is a failure


p.then((message) => {
    console.log('Promise was a ' + message)
}).catch((message) => {
    console.log('Promise was a ' + message)
})

//The value to handle promise is by the use of .then and .catch
//.then -> It is executed if the promise is a success
//.catch -> It is executed if the promise is a failure
//.then can be chained , that is we can write multiple .then
//Example
//Here we will be using fetch which helps us handle api calls and it returns a promise

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))

    // fetch returns a promise , and the result is handled in the first .then
    //Here the response is converted to json format
    //The next .then takes the converted data and consoles it