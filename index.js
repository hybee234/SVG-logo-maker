//---------------------//
//- Required packages -// 
//---------------------//
const fs = require('fs');
//const path = require('path');
const inquirer = require('inquirer');
const circle = require ('./lib/Circle.js');
const square = require ('./lib/Square.js');
const triangle = require ('./lib/Triangle.js');

//--------------------//
//- Global Variables -//
//--------------------//

//https://www.w3.org/TR/SVG11/types.html#ColorKeywords
//const SVGColor = ["alice blue", "antiquewhite", "red", "blue", "green"]

//---------------------------//
//- Prompts to the end user =//
//---------------------------//

// function questions () {
    
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'userShape',
                message: 'Shape: What shape would you like your logo?',
                choices: [
                    {name: 'Circle', value: 'circle'},
                    {name: 'Square', value: 'square'},
                    {name: 'Triangle', value: 'triangle'},
                ],
            },
            {
                type: 'input',
                name: 'userShapeColour',
                message: 'Shape - What colour do you want your shape?',            
            },
            {
                type: 'input',
                name: 'userText',
                message: 'Text - What text do you want to appear? (3 characters max)',
            },
            {
                type: 'input',
                name: 'userTextColour',
                message: 'What colour do you want your text?',
            },      
        ])

        .then ((answers) => {
            console.log(answers)
        
            
            // switch (answers.userShape) {
            //     case "Circle":
            renderFile(answers);
        })
            // }

        
// }

function renderFile(answers) {
    console.log("Hello world")

    // #8F5DBA = purple
    // #FFA000 = Orange
    // #0AC600 = Green
    // #0024C6 = Blue
    // #DA0000 = Red
    // #EAF104 = Yellow
console.log(answers.userShape)
console.log(answers.userShapeColour)
console.log(answers.userText)
console.log(answers.userTextColour)

if (answers.userShape === 'circle') {
    SVG = circle.renderSVG(answers.userShapeColour, answers.userText, answers.userTextColour)
}
if (answers.userShape === 'square') {
    SVG = square.renderSVG(answers.userShapeColour, answers.userText, answers.userTextColour)
}
if (answers.userShape === 'triangle') {
    SVG = triangle.renderSVG(answers.userShapeColour, answers.userText, answers.userTextColour)
}


//SVG = circle.renderSVG("#EAF104", "123", "#0AC600");
//replace circle with variable that handles rectangle, triangle, circle
//replace values with responses - userShapeColour, userText, userTextColour

    fs.writeFile ('./output/logo.svg/', SVG, (err) => err ? console.log (err) : console.log ('SVG File created'));

};





