// function as a parameter (callback)
// 1 hàm truyền vào 1 hàm khác như tham số thì gọi là callback

var coffeeMaker = {
    makeCoffee: function(onFinish) {
        console.log('Making coffee... Done!!!');
        onFinish()
    }
}

var beep = function() {
    console.log('Tít tít...');
}

coffeeMaker.makeCoffee(beep); // naming convention


// Không tạo hàm riêng mà truyền vào luôn
coffeeMaker.makeCoffee(function() {
    console.log('Ting ting...');
});