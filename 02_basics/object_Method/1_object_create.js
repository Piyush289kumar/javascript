// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
    this.x += x;    
    this.y += y;    
    console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype, {
    constructor: {
        value : Rectangle,
        enumerable : false,
        writable: true,
        configurable: true,
    },
});

const rect = new Rectangle();

console.log("Is rect an instance of Rectangle? ==> ", rect instanceof Rectangle);
console.log("Is rect an instance of Shape? ==> ", rect instanceof Shape);
rect.move(1,1);
console.log(Shape.x);