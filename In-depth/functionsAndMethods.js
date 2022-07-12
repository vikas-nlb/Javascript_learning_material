function name(name) {
    console.log(name);
}
let array = {
    fname: 'Vikas',
    mname: 'Kishen',
    lname: 'Bhargava',
    age: '25',
    getFullName: function () {
        return this.fname + " " + this.mname + " " + this.lname;
    }
}
console.log(array.getFullName());
console.log(array.fname);
console.log(array.age);
