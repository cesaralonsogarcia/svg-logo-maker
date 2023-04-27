// Function that generates a shape
class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

// Function that generates the circle
class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        const innerHtml = `<svg version="1.1"
                                width="300" height="200"
                                xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="100" r="100" fill="${this.color}" />
                            <text x="50%" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                            </svg>`;
        return innerHtml;
    }
}

// Function that generates the square
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        const innerHtml = `<svg version="1.1"
                                width="300" height="200"
                                xmlns="http://www.w3.org/2000/svg">
                            <rect width="200" height="100%" fill="${this.color}" />
                            <text x="33%" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                            </svg>`;
        return innerHtml;
    }
}

// Function that generates the triangle
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        const innerHtml = `<svg version="1.1"
                                width="300" height="200"
                                xmlns="http://www.w3.org/2000/svg">
                            <polygon points="0 200, 300 200, 150 0" fill="${this.color}" />
                            <text x="50%" y="145" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                            </svg>`;
        return innerHtml;
    }
}

module.exports = {Shape, Circle, Square, Triangle};