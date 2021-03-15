/**
 * Arithmetic Operators
 * Các phép toán số học trong lập trình
 * 1. ++ -- (increment decrement)
 * 2. * / %
 * 3. + -
 */
var a = 1;
a++; // tăng lên 1 đơn vị nhưng trả về giá trị trước khi tăng
++a; // thay giá trị ngay lúc cộng và trả về giá trị tăng rồi

a--; // giảm 1 đơn vị nhưng trả về giá trị trước khi giảm
--a; // thay giá trị ngay lúc trừ và trả về giá trị giảm rồi

var b = 5;
b++ + ++b;
// 5  + ++b // b = 6
// 5 + 7
// 12

var c = 5;
c++ + ++c - --c + c--;
// 5 + ++c - --c + c--; // 6
// 5 + 7 - --c + c--; // 7
// 5 + 7 - 6 + c--; // 6
// 5 + 7 - 6 + 6; // 5


var d = 5;
var e = 10;

d++  * e-- + --d * ++e; // d 5, e 10
// 5 * e-- + --d * ++e; // d 6, e 10
// 5 * 9 + --d * ++e; // d 6, e 9
// 5 * 9 + 5 * ++e; // d 5, e 9
// 5 * 9 + 5 * 9; // d 5, e 10