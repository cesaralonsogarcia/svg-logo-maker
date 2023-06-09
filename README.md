# SVG Logo Maker

## Description

This a command-line application takes in user input to generate a logo and saves it as an SVG file.

## User Story

AS a freelance web developer  
I WANT to generate a simple logo for my projects  
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input  
WHEN I am prompted for text  
THEN I can enter up to three characters  
WHEN I am prompted for the text color  
THEN I can enter a color keyword (OR a hexadecimal number)  
WHEN I am prompted for a shape  
THEN I am presented with a list of shapes to choose from: circle, triangle, and square  
WHEN I am prompted for the shape's color  
THEN I can enter a color keyword (OR a hexadecimal number)  
WHEN I have entered input for all the prompts  
THEN an SVG file is created named `logo.svg`  
AND the output text "Generated logo.svg" is printed in the command line  
WHEN I open the `logo.svg` file in a browser  
THEN I am shown a 300x200 pixel image that matches the criteria I entered  

## Application Screenshot and Walkthrough Video

Click on the image to navigate to the video

[<img src='https://github.com/cesaralonsogarcia/svg-logo-maker/blob/main/images/svg-logo-maker.png'>](https://watch.screencastify.com/v/HhZZYAq0aeZ4fUwNOv0V "SVG Logo Maker")

## Tests

This application uses the Jest Package to test the Triangle, Square, and Circle classes.