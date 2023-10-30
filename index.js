//---------------------//
//- Required packages -// 
//---------------------//
const fs = require('fs');
//const path = require('path');
const inquirer = require('inquirer');
const circle = require ('./lib/Circle.js');

//--------------------//
//- Global Variables -//
//--------------------//

//https://www.w3.org/TR/SVG11/types.html#ColorKeywords
const SVGColor = ["alice blue", "antiquewhite", "red", "blue", "green"]


var initialise = () => {
    console.log("Hello world")


// #8F5DBA = purple
// #FFA000 = Orange
// #0AC600 = Green
// #0024C6 = Blue
// #DA0000 = Red
// #EAF104 = Yellow

//---------------------------//
//- Prompts to the end user =//
//---------------------------//

inquirer
    .prompt([
        {
            type: 'list',
            name: 'userShape',
            message: 'Shape: What shape would you like your logo?',
            choices: [
                {name: 'Circle'},
                {name: 'Square'},
                {name: 'Triangle'},
            ],
        },
        {
            type: 'input',
            name: 'userShapeColour',
            message: 'Shape - What colour do you want your shape?',            
        },
        //hexadecimal
        //keyword
        {
            type: 'input',
            name: 'userText',
            message: 'Text - What text do you want to appear? (3 characters max)',
        //need to build logic on characters acceptable (regex check, 3 letters)
        },
        {
            type: 'input',
            name: 'userTextColour',
            message: 'What colour do you want your text?',
        },      
        //hexadecimal
        //keyword
    ])

    .then (answers) = {
        // switch (answers.userShape) {
        //     case "Circle":

        // }
    };

SVG = circle.renderSVG("#EAF104", "123", "#DA0000");
//replace circle with variable that handles rectangle, triangle, circle
//replace values with responses - userShapeColour, userText, userTextColour

    fs.writeFile ('./output/logo.svg/', SVG, (err) => err ? console.log (err) : console.log ('SVG File created'));

};

initialise();




