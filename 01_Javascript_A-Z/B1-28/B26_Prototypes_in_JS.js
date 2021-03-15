// Prototype
// Create a new object, object literal
var mouse = {
    weight: 0.2,
    getWeight: function(){
        return this.weight;
    },
};

// constructor function
function Mouse(color, weight){
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
    // this.sleep = function() {
    //     console.log('Sleeping...');
    // };
};

// console.log(Mouse.prototype.constructor === Mouse)

Mouse.prototype.sleep = function() {
    console.log(this.color + ' Sleeping...');
};

var jerry = new Mouse('orange', 20);
var mickey = new Mouse('white', 10);

// console.log(jerry.sleep === mickey.sleep)
jerry.sleep();
mickey.sleep();





