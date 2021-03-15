// array.find trả về giá trị phần tử thỏa true

var numbers = [1, 2, 3, 4]
var returnNumber = numbers.find(function(number) {
    return number % 2 === 0;
})

console.log(numbers)
console.log(returnNumber)

