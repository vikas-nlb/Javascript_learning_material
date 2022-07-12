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

function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            students.push(student);
            console.log("Done with enroll");
            var error = false;
            if (!error) {
                resolve();
            } else {
                reject('Couldnt add')
            }
        }, 3000)
    })

}
// resolve is then 
// reject is catch

function getStudent() {
    setTimeout(() => {
        students.forEach(item => {
            itemList += `<li>${item.name}</li>`
        })
        ul.innerHTML = itemList;
    }, 2000)
}

var newStudent = { name: 'Sagar', subject: 'Coding' }
enrollStudent(newStudent).then(() => {
    getStudent();
}).catch((error) => {
    console.log('Sorry and the reason is ' + error)
}); 
