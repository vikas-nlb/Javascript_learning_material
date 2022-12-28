//Normal Copy
const a = {name:'Vikas'}
const b = a // const 'b' will point to the same memory const 'a' is pointing to
b.name = 'Nium'
console.log("Normal copy - \n Value of first variable : "+a.name+"\n Value of second variable : "+b.name) // Output : Nium as this is normal copy
//Since both are pointing to the same memory , change in one results in change in both or how many ever copies were made



//Shallow copy
//Problems with normal copy can be solved using shallow copy
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too — and so, you may end up unintentionally causing changes to the source or copy that you don't expect

// Way 1
const c = {name:'Vikas'}
const d = {...c} // The values of 'c' are destructured and placed inside a new object and will be assigned to 'd' , here they will be pointing to different memory locations
d.name = 'Nium'
console.log("Shallow copy - spread operator - \n Value of first variable : "+c.name+"\n Value of second variable : "+d.name)

// Way 2 
const e = {name:'Vikas'}
const f = Object.assign({},e)
f.name='Instarem'
console.log("Shallow copy - Object.assign operator - \n Value of first variable : "+e.name+"\n Value of second variable : "+f.name)

//Problem
const g = {
    name:'Vikas',
    skills:{
        primary:'React',
        secondary:'Cypress'
    }
}
const h = {...g} // Object.assign({},g)
h.skills.primary = 'Android'
console.log("Shallow copy - Nesting problem - \n Value of first variable : "+g.skills.primary+"\n Value of second variable : "+h.skills.primary)
// Shallow copy works best when there is no nesting , when nesting comes into picture a change in the copied variable will also change the value in the original variable




//Deep Copy
//This solves the problem of shallow copy

//Stringify and Json parse
 const i = {
    name:'Vikas',
    skills:{
        primary:'React',
        secondary:'Cypress'
    }
}
const j = JSON.parse(JSON.stringify(i)) // First the variable 'i' is converted to a string , then its parsed again to form an object . In this process the entire contents of the object is copied and stored in the new variable
j.skills.primary = 'Android'
console.log("Deep copy - Parse and stringify - \n Value of first variable : "+i.skills.primary+"\n Value of second variable : "+j.skills.primary)

//Problem
const k = {
    name:'Vikas',
    getAge : function (){
        console.log('Age')
    },
    data: new Date()
}
const l = JSON.parse(JSON.stringify(k))
console.log('Object with function and nesting',k)
console.log('Copy of Object with function and nesting',l);
// You can see that function is not copied in the above process and the typeOf 'data' variable is changed from object to string

//Solution
const lodash = require('lodash')
// Using a library called lodash we can make the perfect deep copies of objects
const m = {
    name:'Vikas',
    getAge : function (){
        console.log('Age')
    },
    data: new Date()
}
const n = lodash.cloneDeep(m)
console.log('Object with function and nesting',m)
console.log('Copy of Object with function and nesting using lodash',n);

