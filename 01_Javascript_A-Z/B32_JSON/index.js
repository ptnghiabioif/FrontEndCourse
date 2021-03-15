// JSON object
// 1. Stringify - Convert an object to a JSON string
// 2. parse - Convert a JSON string to an object

var dog = { name: 'Lu', age: 3, dead: false}
var stringDog = JSON.stringify(dog)

var stringCat = '{"name":"Meo", "age": 5, "dead": false}';
var cat = JSON.parse(stringCat)

// console.log(cat.name)
// console.log(dog)
// console.log(typeof(stringDog))

var fs = require('fs');
var readlineSync = require('readline-sync');

var students = []
var student = {};
var att = true;
while(att) {
    var questions =  'Your question: \n 1. Show all students \n 2. Create a new Student \n 3. Save & exit';
    console.log(questions);
    var answer = parseInt(readlineSync.question('Choose your question: '));
    switch(answer) {
        case 1: 
            console.log(fs.readFileSync("data.JSON", "utf8"));
            break;
        case 2: 
            var name = readlineSync.question('Your name: ');
            var age = readlineSync.question('Your age: ');
            var yourClass = readlineSync.question('Your class: ');
            student.name = name;
            student.age = parseInt(age);
            student.class = yourClass;
            students.push(student);
            console.log('-----------Add a new student successfull---------');
            break;
        case 3:  
            var students = JSON.stringify(students);
            var save = fs.writeFileSync("data.JSON", students);
            console.log('Save successfully');
            att = false;
            break;
        default : console.log('Choose 1 or 2 or 3, please.')
    }
}