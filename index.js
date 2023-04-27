// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const svg = require('svg.js');

const shapes = require('./lib/shapes.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Type up to three characters for the logo text:',
    },
    {
        type: 'input',
        name: 'nameColor',
        message: 'Choose a color for the logo text using a keyword or a hexadecimal number:',
    },
    {
        type: 'checkbox',
        name: 'shape',
        message: 'Choose a shape for the logo from the following list:',
        choices: [
            'Circle',
            'Triangle',
            'Square',
        ],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a color for the logo shape using a keyword or a hexadecimal number:',
    },
];

// Function to initialize the app and prompt user for input
function init() {
inquirer
    .prompt(questions)
    .then(answers => {
        if(answers.name.length > 3) {
            return console.log('Error: This application only works with up to 3 characters.');
        }
        const shapeColor = hexCheck(answers.shapeColor);
        const nameColor = hexCheck(answers.nameColor);
        if(answers.shape[0] === 'Circle') {
            const circle = new shapes.Circle(shapeColor, answers.name, nameColor).render();
            fs.writeFile(`./examples/${answers.name}.svg`, circle, (err) =>
            err ? console.log(err) : console.log(`Generated ${answers.name}_logo.svg`)
            );
        } else if(answers.shape[0] === 'Square') {
            const square = new shapes.Square(shapeColor, answers.name, nameColor).render();
            fs.writeFile(`./examples/${answers.name}.svg`, square, (err) =>
            err ? console.log(err) : console.log(`Generated ${answers.name}_logo.svg`)
            );
        } else if(answers.shape[0] === 'Triangle') {
            const triangle = new shapes.Triangle(shapeColor, answers.name, nameColor).render();
            fs.writeFile(`./examples/${answers.name}.svg`, triangle, (err) =>
            err ? console.log(err) : console.log(`Generated ${answers.name}_logo.svg`)
            );
        } else {
            return console.log('Error: No shape was selected!');
        }
    })
};

// Function that checks if color is hexadecimal
function hexCheck(input) {
    const regex = /[0-9A-Fa-f]{6}/g;
    if(input.match(regex)){
        return `#${input}`;
    } else {
        return input;
    }
}

init();