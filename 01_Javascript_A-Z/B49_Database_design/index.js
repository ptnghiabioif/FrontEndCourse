// Database Design

var classes = [
    {   
        id: 0, // indentifier
        name: '1A', 
        teacher: 1,
        students: [
            0,
            1,
            2,
        ]
    },
    {
        id: 1,
        name: '2A',
        teacher: 2,
    },
    {
        id: 2,
        name: '3A', 
        teacher: 3
    },
    {   
        id: 3,
        name: '4A', 
        teacher: 4
    },
    {
        id: 4,
        name: '5A', 
        teacher: 5
    },
]

var teachers = [
    {
        id: 1,
        name: 'Trang',
        age: 23,
    },
    {
        id: 2,
        name: 'Binh',
        age: 25,
    },
    {
        id: 3,
        name: 'Nhi',
        age: 25,
    },
    {
        id: 4,
        name: 'Quynh',
        age: 26,
    },
    {
        id: 5,
        name: 'Ngoc',
        age: 22,
    }
]

var students = [
    { id: 1, name: 'Nghia', height: 170, class: 0 },
    { id: 2, name: 'Nghia', height: 170, class: 0 },
    { id: 3, name: 'Nghia', height: 170, class: 0 },
    { id: 1, name: 'Anh', height: 170, class: 1 }
]

var class1A = classes.find(function(x) {
    return x.name === '1A';
})

console.log(class1A.students.length)

function getStudentsInClass(className) {
    var classObject = classes.find(function(x) {
        return x.name === className;
    });
    var studentsInClass = students.filter(function(student) {
        return student.class === classObject.id;
    });
    return studentsInClass
}

var studentsInClass = getStudentsInClass('2A')
console.log(studentsInClass)
