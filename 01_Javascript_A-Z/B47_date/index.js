// Date
// moment.js
var moment = require('moment');
// var now = new Date();
// var myBirthday = new Date(1996, 7, 29); // 29/08/1996

// // number of miliseconds from 1-1-1970 +7 +9
// console.log(now.getTime())
// console.log(myBirthday.getTime())

var now = moment('2021-04-04 00:00');
console.log(now.fromNow());
console.log(now.format('YYYY/MM/DD'));




