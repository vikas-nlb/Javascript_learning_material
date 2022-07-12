
/* String */
let name = "Nium";
console.log(name + ":" + typeof name);
// Output : string

/* Number */
let age = 5;
console.log(age + ":" + typeof age);
// Output : number

/* object */
let fullName = { first: "Nium", last: "Instarem" };
console.log(...(fullName + ":" + typeof fullName));
// Output : object

/* Boolean */
let truth = false;
console.log(truth + ":" + typeof truth);
// Output : boolean

/* Array */
let language = ["HTML", "CSS", "JS"];
console.log(...(language + ":" + typeof language));
// Output : object
// Here typeof will return 'object' ,  as javascript recognises array as a type of object

/* Undefined */
let x;
console.log("X is :" + typeof x);
// Output : undefined

/* Null */
let val = null;
console.log(val + ":" + typeof val);
    // Output : object
    // Here typoOf will return 'object' , this is a javascript bug.
