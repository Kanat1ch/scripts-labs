class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getParameters() {
        for (let key in this) {
            console.log(`${key}: ${this[key]};`);
        }
    }
}

class Dot extends Position {
    constructor(x, y) {
        super(x, y);
    }
}

class Line extends Position {
    constructor(x, y, width) {
        super(x, y);
        this.width = width;
    }
}

class Circle extends Position {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
}

class Ellipse extends Position {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
}

class Rectangle extends Position {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
}

function calcDistance(a, b) {
    console.log(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)));
}

const aDot = new Dot(0, 0);
const bDot = new Dot(10, 10);

calcDistance(aDot, bDot);
