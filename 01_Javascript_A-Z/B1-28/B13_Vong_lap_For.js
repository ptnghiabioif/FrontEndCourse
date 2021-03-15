// for loop
// Bài toán: hiển thị số 0=> 9
for (var i = 0; i < 10; i++){
    console.log(i)
}

for (var i = 9; i >= 0 ; i--){
    console.log(i)
}

var employees = [
    {name: 'Nghĩa', age: 25},
    {name: 'Trang', age: 23},
    {name: 'Bình', age: 25},
    {name: 'An', age: 22},
]

for (var y = 0;y < employees.length;y++){
    console.log(employees[y].name, employees[y].age)
}