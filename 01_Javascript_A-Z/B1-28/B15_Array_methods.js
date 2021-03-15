// Các methods của 1 array
// - a.concat(b) nối 2 mảng, không thay đổi mảng cũ
// - a.push(b) cho phần tử mới vào mảng ở bị trí cuối, mảng bị thay đổi
// - a.pop() lấy ra phần tử cuối và thay đổi mảng ấy, mảng bị thay đổi
// - a.shift() đẩy phần tử đầu tiên của mảng ra khỏi mảng, mảng bị thay đổi
// - a.unshift() nhắc phần tử vào đầu mảng, mảng bị thay đổi
// - a.slice()  trả về 1 mảng mới là mảng con của mảng ban đầu, không thay đổi mảng cũ
// - s.splice() trả về một mảng chứa các phần từ bị xóa, mảng bị thay đổi

var a = [1, 3, 2];
var b =  [10, 20];

// var c = a.concat(b);
// console.log(a);
// console.log(b);
// console.log(c);

// var c = 5;
// a.push(c); // trả về length của a

// var c = a.pop(); // tả về phần tử bị đẩy ra

// var c = a.shift(); // trả về giá trị bị đẩy ra

// var c = a.unshift(5); // trả về độ dài mới của mảng
// var c = a.slice(1,2);

var c = a.splice(1,1)
console.log(c);
console.log(a);