//= operator in javascript is called as assign operator. It is used to assign value to a variable, it is used as:

variable = "value"

//here, as you can see, it is saying that variable should be assigned(=) the value "value"


//== operator in javascript is called the equals operator. It is used to compare equals between two values, ignoring their types(number, string, boolean, etc.), it is used as:

console.log(5 == "5" ) // true

//here, as you can see, it is asking that 5 is equal to "5", ignoring the type, it returns true as their value is 5 (Note that "5" is converted to 5 for checking for == comparator)


//=== operator in javascript is called the strict equals operator. It is used to compare euals between two values, considering their types(number, string, boolean, stc.), it is used as:
    
console.log(5 === '5' ) // false

//here, as you can see, it is asing that 5 is equal to "5", considering the type, it returns false as their values is same, but their type is not (Note that "5" is not converted into 5 for checking for === comparator)
