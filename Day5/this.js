//The this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
//Methods -> obj
//Function -> window or global in node

//Method inside an object calling 'this' 
const object = {
    name: 'Nium',
    printName() {
        console.log('Not using this keyword :' + this.name) // Since 'this' is used inside a method the value of 'this' is the object
    }
}
//object.printName()

// Function calling 'this'
 function test(){
    console.log(this) // 'this' will reference global object as its inside a function
 }

 test()

 //Sending this context to forEach and map function

const obj = {
    name: 'Nium',
    tags:['Fintech','Startup'],
    printName() {
        console.log('Not using this keyword :' + this.name) // Since 'this' is used inside a method the value of 'this' is the object
    },
    printTagsMap(){
        this.tags.map(function(tag){
            console.log(this.name,tag)
        },this) // we are supplying the context in the form of 'this' and this provided the context as the object as this is still outside the function execution
    },
    printTagsForEach(){
        this.tags.forEach(function(tag){
            console.log(this.name,tag)
        },this)
    }
}
obj.printTags()

