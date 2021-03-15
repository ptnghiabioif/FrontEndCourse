// Math object in JS
// Math.PI
// Math.ceil(number) làm tròn số thập phân lên
// Math.floor(number) làm tròn số thập phân xuống
// Math.round(number) làm tròn số thập phân
// Math.max(x1, x2, ...)
// Math.min(x1, x2, ...)
// Math.random()

// S = r * r * PI
function discArea(r){
    return r * r * Math.PI
}
var a = discArea(5)
console.log(a)

console.log(Math.ceil(9.2)) // 10
console.log(Math.floor(9.7)) // 9
console.log(Math.round(9.2))

console.log(Math.max(10, 20, -1))
console.log(Math.min(10, 20, -1))


function tossACoin(){
    var rand = Math.random();
    console.log(rand);
    return rand > 0.5;
}
console.log('Random ', tossACoin());

function rolllADie(){
    var random = Math.random();
    var xucsac = Math.ceil(random * 6);
    return xucsac;
}
console.log("Gia tri xuc sac la : ", rolllADie());
