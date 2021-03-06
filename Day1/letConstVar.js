/* ------------------------------------- var ------------------------------------- */
// - hoisted (always declared at top of scope, global if none)
//   - function scope
var a = 1;

/* --- hoisted (always declared at top of scope, global if none) ---*/
{
  console.log(b); // this doesnt throw error rather consoles undefines , as when we declare var all variables are hoisted , that means irrespective of where you define it the declaration is pushed to the top but assignment stays where it is
  var b = 10;
  console.log(b); // here it will console 10 as hoisting pushes declaration to the top but assignment is kept as it is
}

/* --- function scope ---*/
{
  function f() {
    // It can be accessible any
    // where within this function
    var c = 10;
    console.log(c);
  }
  f();

  // A cannot be accessible
  // outside of function
  console.log(c);
}

/* ------------------------------------- let ------------------------------------- */
//- block scope
// - not redeclarable
// - declare the variable with the same name in different blocks
let d = 2;

/* --- block scope ---*/
{
  {
    let e = 3;
    console.log(e); // e is accessable so it will print 3
  }
  console.log(e); // e is not accessable as let is block spoe
}

/* --- not redeclarable ---*/
{
  let f = 4;
  console.log(f);
  //let f = true // this gives an error as let can't be redeclared
}

/* --- declare the variable with the same name in different blocks ---*/
let a = 10;
if (true) {
  let a = 9;
  console.log(a); // It prints 9
}
console.log(a); // It prints 10

/* ------------------------------------- const ------------------------------------- */
// - block scope
// - not redeclarable
// - not reassignable
const g = 5;

/* --- block scope ---*/
{
  {
    let e = 3;
    console.log(e); // e is accessable so it will print 3
  }
  console.log(e); // e is not accessable as let is block spoe
}

/* --- not reassignable ---*/
{
  const g = 10;
  function f() {
    g = 9; // thorws an error
    console.log(g);
  }
  f();
}

/* --- not redeclarable ---*/
const h = true;
//const h = 3 this is not allowed
