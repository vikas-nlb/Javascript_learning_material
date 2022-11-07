//setTimeout method
// Set time out method calls a function after a number of milliseconds.
function greet(name,bye){
    console.log('Hello, Good morning '+name+", "+bye)
}

setTimeout(greet,3000,'Vikas',"Take care")
// First we send the function , then the desiered time out in milliseconds then at last we can send all the arguments the function needs.

//setTimeout(greet(),3000,'Vikas',"Take care") is wrong as you should only pass the function not call it , as this will result in making the setTimeout ineffective as the function will run the second setTimeout method is called rather than waiting for the desired amount of time

const timeoutId = setTimeout(greet,5000,'Nium','All the best')
//timeoutId get an unique setTimeout id assigned as soon as setTimeout method is called , using this id we can access the setTimeout

clearTimeout(timeoutId)
//clearTimeout helps us stop the setTimeout method even after it is called , lets say you want to execute something after 20 seconds so you use setTime out but after a few seconds you want to cancel the execution then you can use clearTimeout to stop the setTimeout


//setInterval
// Set interval method calls a funtion repeatedly in the set intervals of desired time in milliseconds
let count = 0
function printCount(message){
    console.log(message + count)
    count++
}
setInterval(printCount,1000,"Count : ")
// First we send the function , then the desiered time out in milliseconds then at last we can send all the arguments the function needs.

//setInterval(printCount('test'),1000) this is wrong as setInterval expects a callback function but here it gets executed the first time as the function is called but will throw an error later as we have called the function not supplied setInterval method with a callback function

function getTime(){
    time = new Date()
    console.log(time)
}
const intervalId = setInterval(getTime,1000)

clearInterval(intervalId)
//clearInterval helps us stop the setInterval method even after it is called , lets say you want to execute something every 20 seconds so you use setInterval but after a few times you want to cancel the execution then you can use clearInterval to stop the setInterval