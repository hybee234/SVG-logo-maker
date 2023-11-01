// Called by index.js if the user selects shape "circle"
// Creates a circle object and returns SVG code for a circle with user selected paramters
// Index.js to receive and write to file

// Circle class has parent class Shape

function renderSVG(userShapeColour, userText, userTextColour) {

    const Shape = require ('./Shape.js');

    class Circle extends Shape {
    constructor (shapeColour, text, textColour) {
        super (shapeColour, text, textColour)
    };
}

const newLogo = new Circle (userShapeColour, userText, userTextColour)

const SVG = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
    <circle cx="150" cy="100" r="100" fill="${newLogo.shapeColour}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${newLogo.textColour}"> ${newLogo.text} </text>
</svg>
`
return SVG;
};

module.exports = {renderSVG};
