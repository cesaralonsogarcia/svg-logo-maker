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

// Function to initialize the app
function init() {
inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
    })
}

init();