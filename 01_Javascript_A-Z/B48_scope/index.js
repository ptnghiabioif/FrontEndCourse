// scope: phạm vi hoạt động của 1 biến
// 1. Global scope
// 2. Local scope
// Khi mà 1 hàm tạo ra  1 scope thì có giới hạn

var a = 1
var b = 2;
function random() {
    a = 3;
    var b = Math.random();
    console.log(a)
    console.log(b)
}
random();
console.log(a)
console.log(b)