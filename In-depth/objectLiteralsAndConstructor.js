//object literal
obj = {
    name: 'Vikas',
    city: 'Bangalore'
}

//constructor
function GenerateCar(name, speed) {
    this.name = name,
        this.speed = speed,
        this.run = function () {
            console.log(this.name + " is running");
        }
    this.analyse = function () {
        console.log(name + ` is slower than BR-V by ${200 - this.speed} kmph`)
    }
}

let car1 = new GenerateCar('Nano', 105);
