var products = [
    {name : 'A', unitPrice : 100, quantity: 10, category : 'Electronic goods'},
    {name : 'B', unitPrice : 50, quantity : 15, category : 'Network'},
    {name : 'C', unitPrice : 15, quantity : 30, category : 'Electronic goods'},
    {name : 'D', unitPrice : 11, quantity : 26, category : 'Ipad'},
    {name : 'E', unitPrice : 32, quantity : 80, category : 'Network'},
    {name : 'F', unitPrice : 35, quantity : 40, category : 'Electronic goods'},
    ];
    
var FilterCategory = products.filter(function(category){
    return category.category === 'Network';
});
console.log(FilterCategory);
    
var TongTien = products.map(function(sum){
    return sum.unitPrice * sum.quantity;
});
    
var TonKho = TongTien.reduce(function(x,y){
    return x+y;
});
    
console.log(TonKho);
    
var BigTonKho = TongTien.filter(function(big){
    return big > 500;
});
console.log(BigTonKho);