var readlineSync = require('readline-sync')

// Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

var pet = {};
var name = readlineSync.question('Your pet name: ');
var gender = readlineSync.question('Pet gender (Male/Female): ');
var weight = readlineSync.question('Weight?: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);
console.log(pet)


