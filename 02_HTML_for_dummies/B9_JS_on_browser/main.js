function Cat() {
    this.stomatch = [];

}
Cat.prototype.eat = function(mouse) {
    this.stomatch.push(mouse);
    return this
};

function Mouse(name) {
    this.name = name;
};

var tom = new Cat();
var mickey = new Mouse('Mickey');
tom.eat(mickey);

console.log(tom)

