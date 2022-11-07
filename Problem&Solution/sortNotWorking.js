let a = [10,5,11]
a.sort()
console.log('Sorted array',a) // Expected answer is [5,10,11] but we get [10,11,5]
//This happens because when an array is sorted without argument it is
//Automatially converted to a string and then sorted so we will never get 
//the answer we want
//To solve this we need to send arguments inside sort which will help 
//the inbuild function sort better
a.sort((a,b)=>a-b)
console.log('Sorted array with arguments',a)
