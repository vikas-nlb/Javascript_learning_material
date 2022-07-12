var hello = () => console.log("Welcome to the world of arrow function!");
var sum = (a, b, c) => a + b + c;
var half = a => a / 2;

hello();
console.log(sum(10, 20, 30));
console.log(half(60));

setTimeout(() => {
    console.log("We are inside the world of time out");
})

var obj = {
    name: ["Vikas", "Varun", "Sagar"],
    greet: "Hello from my side",
    sayHi() {
        this.name.forEach((friend) => {
            console.log("My name is " + friend + "." + this.greet)
        })
    }
}
obj.sayHi();
