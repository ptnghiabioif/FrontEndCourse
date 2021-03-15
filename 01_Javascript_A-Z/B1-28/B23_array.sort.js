// array.sort(function(a, b) { }) -> return a sorted array
//              ^ sort function
/**
 * if sort function
 * 1. returns a value < 0
 *  a will come before b
 * 2. returns a value > 0
 *  a will come after b
 * 3. returns 0
 *  a and b will stay unchanged
 */

var numbers = [2, 9, 3, 4, 1];
// [ 1, 2, 3, 4, 9 ] ascending numbers
var ascendingNumbers = numbers.sort(function (a, b) {
    // assume: a = 1, b = 4
    return a - b
});

console.log(ascendingNumbers)

// [ 9, 4, 3, 2, 1 ] descending numbers
var descendingNumbers = numbers.sort(function (a, b) {
    // assume:  = 3, b = 4
    // expect: a comes after b
    return b - a;
});

console.log(descendingNumbers)

var employees = [
    { name: 'Nghĩa', age: 25 },
    { name: 'Trang', age: 23 },
    { name: 'Anh', age: 24 },
]
var sortedEmployees = employees.sort(function (a, b) {
    // a = employees[0], b = employees[1]
    // expect: a comes after b
    return a.age - b.age; // > 0
})

console.log(sortedEmployees)

var produces =
    [{ name: 'serum', price: 10000, stock: 1 },
    { name: 'srm', price: 5000, stock: 3 },
    { name: 'bbcream', price: 1000, stock: 3 }];

var resort = produces.sort(function (a, b) {
    return (b.price * b.stock) - (a.price * a.stock);
}); 

console.log(resort);
