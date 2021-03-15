// if ... else if ... else

/**
 * Syntax
 * if (condition1) {
 *  statement1;
 * } else if (condition2) {
 *  statement2;
 * } else {
 *  statement3;
 * }
 */
function getTicketFee(person) {
    var basePrive = 10000;
    if (person.age < 15) {
        return basePrive * 0.8;
    } else if (person.age > 60) {
        return basePrive * 0.9;
    } else {
        return basePrive;
    }
}


var person = {
    age: 65
}
var fee = getTicketFee(person)
console.log(fee)
