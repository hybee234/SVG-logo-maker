//---------------------//
//- Required packages -// 
//---------------------//
const fs = require('fs');
const inquirer = require('inquirer');
const circle = require ('./lib/Circle.js');
const square = require ('./lib/Square.js');
const triangle = require ('./lib/Triangle.js');
const questions = require ('./lib/questions.js')

//--------------------//
//- Global Variables -//
//--------------------//



//---------------------------//
//- Prompts to the end user =//
//---------------------------//

// function questions () {
    
    inquirer
        .prompt(questions)

        .then ((answers) => {
            console.log(answers)   
            renderFile(answers);
        })

        .catch ((err) => {
            console.log(err)
        });
        
// }

function renderFile(answers) {

    // #8F5DBA = purple
    // #FFA000 = Orange
    // #0AC600 = Green
    // #0024C6 = Blue
    // #DA0000 = Red
    // #EAF104 = Yellow

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

    fs.writeFile ('./output/logo.svg/', SVG, (err) => err ? console.log (err) : console.log ('SVG File created http://127.0.0.1:5501/Challenges/SVG-logo-maker/output/logo.svg' ));

};





