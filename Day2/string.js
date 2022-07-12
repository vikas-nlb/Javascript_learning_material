//A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.
// typeof string

var a = "Instarem team is in India";
var b = "  Instarem is part of Nium  ";

console.log("Lenght: " + a.length);
console.log("Slice: " + a.slice(2, 10));
console.log("SubString: " + a.substring(10, 2));
console.log("Replace: " + b.replace("Instarem", "Nium"));
console.log("UpperCase: " + a.toUpperCase());
console.log("LowerCase: " + b.toLowerCase());
console.log("Concat: " + a.concat(b));
console.log("Before trim:" + b + "\n After Trim: " + b.trim());
