// array.map: ánh xạ, biến đổi 1 tập hợp phần tữ thành phần tử mới
var numbers = [1, 2, 3, 4];
var squaredNumbers = numbers.map(function(x){
    return x * x
});
console.log(numbers)
console.log(squaredNumbers)

var rectangles = [
    {width: 10, height: 5},
    {width: 10, height: 20},
    {width: 4, height: 16},
];

var squaredRectangles = rectangles.map(function(item){
    return item.width * item.height
})

console.log(rectangles)
console.log(squaredRectangles)