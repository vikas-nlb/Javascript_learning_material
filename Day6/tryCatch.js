//Try catch finally throw

//A runtime error happens during the running of the program. A compiler error happens when you try to compile the code. If you are unable to compile your code, that is a compiler error. If you compile and run your code, but then it fails during execution, that is runtime.

// try catch can handle only run time errors , thats errors which occurs during running of the application

//try catch helps developers handle edge cases better and it helps users understand the problem incase there is an run time error

try {

    console.log('Entering try')

    helloFunction()

    console.log('Hello was called')

} catch (err) {

    console.log('Run time error : ' + err)

} finally {

    console.log('This always runs')

}

//try block runs any code written inside it and keeps a watch for run time errors , when an error actually occurs rather that crashing the application it helps developers deal with it in a logical manner
//Catch block helps try block handle the run time errors it caught 
//Finally block always executed , even if there is an error which is caught or even if the execution is smooth without any errors

let json = '{ "age": 30 }';

try {

    let user = JSON.parse(json)

    if (!user.name) {
        throw new Error('User data is incomplete as user name is not present')
    }
    console.log(user.name)

} catch (err) {

    console.log('Error message : ' + err.message)

}

// With throw we can create our own errors and handle it with catch