var obj = {
    name: "Vikas",
    friends: ["Varun", "Sagar", "Vikas"],
    place: ["Bangalore", "Germany"]
}
console.log(obj);

var JsonObj = JSON.stringify(obj);
console.log(JsonObj);

JsonObj = JsonObj.replace("Vikas", "Vikas Kishen Bhargava");
console.log(JsonObj);

var obj2 = JSON.parse(JsonObj);
console.log(obj2);
