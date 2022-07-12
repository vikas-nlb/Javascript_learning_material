var name = 'Vikas';
var bye = 'Ta ta byeee'
const hello = function () {
    console.log('Hello!');
}

function helloAgain() {
    console.log("Hello again!");
}

function stillHere(name) {
    console.log("Still here " + name + "?");
}

function leave(name, bye = "Bye bye") {
    console.log("Please leave " + name + " " + bye);
}

hello();
helloAgain();
stillHere(name);
leave(name);
leave(name, bye);
