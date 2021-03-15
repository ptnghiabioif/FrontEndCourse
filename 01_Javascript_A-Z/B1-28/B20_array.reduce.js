// array.reduce

var numbers = [1, 2, 3, 4]
var sum = numbers.reduce(function(a, b) {
    return a + b
});

console.log(numbers)
console.log(sum)

var orders = [
    {name: 'A', quantity: 2, unitPrice: 100 },
    {name: 'B', quantity: 1, unitPrice: 400 },
    {name: 'C', quantity: 5, unitPrice: 15 },
];

var sumOrders = orders.reduce((total,item)=>{
    return total += item.quantity * item.unitPrice
},0);

console.log(orders)
console.log(sumOrders)