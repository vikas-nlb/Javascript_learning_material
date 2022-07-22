//"async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log('Entered Promise')
        if (location == 'Instarem') {
            resolve('Welcome to Instarem')
        } else {
            reject('Can access only Instarem')
        }
    })
}

function processRequest(data) {
    return new Promise((resolve, reject) => {
        console.log('Entered make request')
        resolve('Processed data : ' + data)
    })
}

// //Solving the promise in the old fashion way
// makeRequest('Nium').then((res) => {
//     console.log('Response recieved ')
//     return processRequest(res)
// }).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// Solving in async await way

async function doWork() {
    try {
        const response = await makeRequest('Nium')
        console.log('Response Received')
        const proceesResponse = await processRequest(response)
        console.log(proceesResponse)
    } catch (err) {
        console.log(err)
    }
}

doWork()

// 'async' keyword should added in front of the function
// This makes the program asynchronous
// 'await' keyword makes the code execute the function or code in parallel and the code will continue execution and come back once the function finishes execution
