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
// Array: list danh sách các phần tử giống nhau

var dog1 = {
    type: 'husky',
};
var dog2 = {
    type: 'dudo',
};
var dog3 = {
    type: 'shiba'
};

var bunchOfDog = [dog1, dog2, dog3];
console.log(bunchOfDog[1].type);

var dog4 = {
    type: 'alaska'
};
bunchOfDog[0] = dog4;
console.log(bunchOfDog)

var contacts = [
    { name: 'Nghĩa 1', phone: '0792217080'},
    { name: 'Nghĩa 2', phone: '0792217080'},
]
