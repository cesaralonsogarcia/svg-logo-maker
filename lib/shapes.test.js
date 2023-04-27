// Constructor Shape, Square, Triangle, and Circle are imported
const Shape = require('../lib/shapes.js');

// Test for the Square constructor
describe('Square', () => {
    describe('render', () => {
        it('should render a blue square logo', () => {
            const innerHtml = `<svg version="1.1"
                                width="300" height="200"
                                xmlns="http://www.w3.org/2000/svg">
                            <rect width="200" height="100%" fill="blue" />
                            <text x="33%" y="125" font-size="80" text-anchor="middle" fill="white">TXT</text>
                            </svg>`;
            const square = new Shape.Square('blue', 'TXT', 'white');
            expect(square.render()).toEqual(innerHtml);
        });
    });
});

// Test for the Circle constructor
describe('Circle', () => {
    describe('render', () => {
        it('should render a green circle logo', () => {
            const innerHtml = `<svg version="1.1"
                                width="300" height="200"
                                xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="100" r="100" fill="green" />
                            <text x="50%" y="125" font-size="80" text-anchor="middle" fill="white">TXT</text>
                            </svg>`;
            const circle = new Shape.Circle('green', 'TXT', 'white');
            expect(circle.render()).toEqual(innerHtml);
        });
    });
});

// Test for the Triangle constructor
describe('Triangle', () => {
    describe('render', () => {
        it('should render a red triangle logo', () => {
            const innerHtml = `<svg version="1.1"
                                width="300" height="200"
                                xmlns="http://www.w3.org/2000/svg">
                            <polygon points="0 200, 300 200, 150 0" fill="red" />
                            <text x="50%" y="145" font-size="80" text-anchor="middle" fill="white">TXT</text>
                            </svg>`;
            const triangle = new Shape.Triangle('red', 'TXT', 'white');
            expect(triangle.render()).toEqual(innerHtml);
        });
    });
});