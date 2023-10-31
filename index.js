//--------------------------//
//- Required packages/inks -// 
//--------------------------//
const fs = require('fs');
const inquirer = require('inquirer');
const circle = require ('./lib/Circle.js');
const square = require ('./lib/Square.js');
const triangle = require ('./lib/Triangle.js');
const questions = require ('./lib/questions.js')

//---------------------------//
//- Prompts to the end user -//
//---------------------------//
    
inquirer
    .prompt(questions)

    .then ((answers) => {
        console.log(answers)   
        renderFile(answers);
    })
    .catch ((err) => {
        console.log(err)
    });

//----------------------------------//
//- Function - Renders Output file -//
//----------------------------------//

function renderFile(answers) {
//Determine the logo shape requested by the user and call the relevant file to generate the SVG
if (answers.userShape === 'circle') {
    SVG = circle.renderSVG(answers.userShapeColour, answers.userText, answers.userTextColour)
}
if (answers.userShape === 'square') {
    SVG = square.renderSVG(answers.userShapeColour, answers.userText, answers.userTextColour)
}
if (answers.userShape === 'triangle') {
    SVG = triangle.renderSVG(answers.userShapeColour, answers.userText, answers.userTextColour)
}
// Write the SVG using the content provided by the called filed above
fs.writeFile ('./output/logo.svg/', SVG, (err) => err ? console.log (err) : console.log ('SVG File created http://127.0.0.1:5501/Challenges/SVG-logo-maker/output/logo.svg' ));
};





