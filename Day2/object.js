// Object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties such as colour, design method, weight, material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

let obj = {
  companyName: "Nium",
  location: "Singapore",
  employees: ["A", "B", "C"],
  wfh: true,
  numberOfEmployee: 1000,
  employeeDetais: [
    {
      name: "A",
      location: "Bangalore",
    },
    {
      name: "B",
      location: "Mumbai",
    },
    {
      name: "C",
      location: "Chennai",
    },
  ],
  printEmployees() {
    for (let i = 0; i < this.employees.length; i++) {
      console.log(this.employees[i]);
    }
  },
};

console.log(obj.printEmployees());
