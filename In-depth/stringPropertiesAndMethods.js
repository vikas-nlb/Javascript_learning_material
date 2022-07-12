let div = document.getElementById("div");

div.innerHTML = "Hello";

let s = "This is for testing string > properties and methods,Okay?";

console.log(s);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.length);
console.log("At postiion 50: " + s[10]);
console.log("Last index of d:" + s.lastIndexOf("s"));
console.log("Index of t: " + s.indexOf("t"));
console.log("Char at 45: " + s.charAt(45));
console.log("Ends with odds: " + s.endsWith("odds"));
console.log("Includes string: " + s.includes("string"));
console.log("Sub String of 15 and 30: " + s.substring(15, 30));
console.log("Slice string and display 4 elements: " + s.slice(-4));
console.log("Split string at . : " + s.split('>'));
console.log("Replace > with a space : " + s.replace('>', ' '))

