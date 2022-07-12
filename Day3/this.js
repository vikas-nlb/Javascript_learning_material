//The this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const test = (name) => {
    const object = {
        name: 'Nium',
        printName() {
            console.log('Using this keyword :' + this.name)
            console.log('Not using this keyword :' + name)
        }
    }
    object.printName()
}
console.log('Hui')
test('JavaScript')
