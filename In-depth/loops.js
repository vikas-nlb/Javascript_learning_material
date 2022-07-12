var friends = ["Vikas", "Varun", "Sagar", "Praveen", "Nikhil"];
var employees = [{
    name: "Vikas",
    salary: 42000,
    city: "Bangalore"
},
{
    name: "Sagar",
    salary: 84000,
    city: "Bangalore"
}]

console.log('For loop');
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

console.log('\n\n For each');
friends.forEach(function print(element) {
    console.log(element);
});

console.log('\n\n For of');
for (element of friends) {
    console.log(element);
}

console.log('\n\n For in');
for (key in employees) {
    console.log(employees[key]);
}

console.log('\n\n For of in array of objects');
for (let key of employees) {
    console.log(key.name);
}