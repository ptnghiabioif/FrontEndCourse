// Other For loops
// 1. For ... of
// 2. For .. in

var employees = [
    {name: 'Nghĩa', age: 25},
    {name: 'Trang', age: 23},
    {name: 'Bình', age: 25},
    {name: 'An', age: 22},
]

for (employee of employees) {
    console.log(employee.name, employee.age)
}

var myDog = {
    weight: 5,
    name: 'YaShu',
    age: 1,
};

// myDog.name // myDog['name'] = 'Dần'
for (var key in myDog){
    console.log(key, myDog[key]);
}