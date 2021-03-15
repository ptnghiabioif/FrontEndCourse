// errat.reduce (part 2)


var products = [
    {name: 'A', quantity: 2, unitPrice: 10 },
    {name: 'B', quantity: 3, unitPrice: 20 },
    {name: 'C', quantity: 4, unitPrice: 30 },
];
var total = products.reduce(function(currentTotal, product){
    return currentTotal += product.quantity * product.unitPrice;
}, 0);

console.log(total);

var items = ['Tom', 'Bill', 'Kim'];

var result = items.reduce(function(result, item){
    return result + "<" + item + ">";
}, "");

console.log(result);
