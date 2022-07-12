async function getData() {
    console.log('Entered getData');
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const users = await response.json();
    console.log('After response');
    return users;
}

console.log('Before calling function');
let a = getData();
console.log('After calling function');
console.log(a)
a.then((data) => {
    console.log(data);
})
console.log('Last line of code')
