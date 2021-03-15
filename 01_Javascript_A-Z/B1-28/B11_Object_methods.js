// Object methods
// Các phương thức của object

var myDog = {
    weight: 5,
    name: 'YaShu',
    age: 1,
    bark: function() { // anonymous function
        console.log('Tới giờ ăn rồi !!!', this.name) // return undefined
    },
    eat: function(bone) {
        this.weight = this.weight + bone.weight;
        return this
    }
};

console.log(myDog.bark());

var bone = { weight: 1};

console.log('Before eating', myDog.weight);
myDog.eat(bone);
console.log('After eating', myDog.weight);

