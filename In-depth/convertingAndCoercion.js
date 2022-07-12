let num = String(45);
let num2 = 55;
num2 = num2.toString();
console.log(num, typeof (num));
console.log(num2, typeof (num2));

let booleanVal = String(true);
console.log(booleanVal, typeof (booleanVal));

let dateVal = String(new Date());
console.log(dateVal, typeof (dateVal));

let arrayVal = String([1, 2, 3, 4, 5]);
console.log(arrayVal, typeof (arrayVal));

let str1 = parseInt('1234');
console.log(str1);

let str2 = parseInt('12VIKAS34');
console.log(str2);

let floatVal = '34.099';
console.log(parseFloat(floatVal))
console.log(parseFloat(floatVal).toFixed(10))
