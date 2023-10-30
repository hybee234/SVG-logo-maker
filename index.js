//---------------------//
//- Required packages -// 
//---------------------//
const fs = require('fs');
const inquirer = require('inquirer');

//--------------------//
//- Global Variables -//
//--------------------//

//https://www.w3.org/TR/SVG11/types.html#ColorKeywords
const SVGColor = ["alice blue", "antiquewhite", "red", "blue", "green"]

//---------------------------//
//- Prompts to the end user =//
//---------------------------//

var questions = () => {
inquirer
    .prompt([
        {
            type: 'input',
            name: 'shape',
            message: 'Shape: What shape would you like your logo?',
        },


        {
            type: 'input',
            name: 'shapeColour',
            message: 'What colour do you want your shape?',
        },
        //hexadecimal
        //keyword
        {
            type: 'input',
            name: 'text',
            message: 'What text do you want to appear? (3 characters max)',

        //need to build logic on characters acceptable (regex check, 3 letters)

        },
        {
            type: 'input',
            name: 'textColour',
            message: 'What colour do you want your text?',
        },      
        //hexadecimal
        //keyword
    ])
}

var initialise = () => {
    console.log("Hello world")

    class Circle {
        constructor (shapeColour, text, textColour) {
        this.shapeColour = shapeColour;
        this.text = text
        this.textColour = textColour

        }    
    }

    const newLogo = new Circle ("#8F5DBA", "ABC", "#EAF104")

    const circleSVG = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">    
    <circle cx="150" cy="150" r="100" fill="${newLogo.shapeColour}" />
    <text x="150" y="170" font-size="70" text-anchor="middle" fill="${newLogo.textColour}"> ${newLogo.text} </text>
    Sorry, your browser does not support inline SVG.
</svg>`


// #8F5DBA = purple
// #FFA000 = Orange
// #0AC600 = Green
// #0024C6 = Blue
// #DA0000 = Red
// #EAF104 = Yellow


    fs.writeFile ('./output/logo.svg/', circleSVG, (err) => err ? console.log (err) : console.log ('SVG File created'));

};



initialise();




