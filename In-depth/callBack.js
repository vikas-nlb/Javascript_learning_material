var students = [{
        name: 'Vikas',
        subject: 'Acting'
    },
    {
        name: 'Varun',
        subject: 'Dove'
    }]
    var ul = document.getElementById('ul');
    var itemList = []

    function enrollStudent(student, callback) {
        setTimeout(() => {
            students.push(student);
            console.log("Done with enroll");
            callback();
        }, 3000)
    }

    function getStudent() {
        setTimeout(() => {
            students.forEach(item => {
                itemList += `<li>${item.name}</li>`
            })
            ul.innerHTML = itemList;
        }, 2000)
    }

    var newStudent = { name: 'Sagar', subject: 'Coding' }
    enrollStudent(newStudent, getStudent); 
    // sending a function as a parameter to another function
    //This will make sure that the sent function will exceute 
    //only after the original function is executed
