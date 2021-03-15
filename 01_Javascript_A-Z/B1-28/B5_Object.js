/**
 * Data types:
 * Primitive types:
 * - Number
 * - String
 * - Boolean
 * Special types:
 * - undefined
 * - null
 * Reference types:
 * - Array
 * - Object 
 */

// var a = {key: value};
var b = {};

var myFriend = {
    name: 'Trang',
    age: 22,
    isMale: false,
}
var myCrush = {
    name: 'Unknown',
    nickName: 'Crush never see',
    gender: 'Male',
}
// camelCase

console.log(myCrush.name)

myFriend.age += 1
console.log(myFriend)
console.log(myCrush['gender'])