// Called by index.js if the user selects shape "square"
// Creates a square object and returns SVG code for a square with user selected paramters
// Index.js to receive and write to file

// Square class has parent class Shape

function renderSVG(userShapeColour, userText, userTextColour) {

    const Shape = require ('./Shape.js');

    class Square extends Shape {
    constructor (shapeColour, text, textColour) {
        super (shapeColour, text, textColour)
    };
}

const newLogo = new Square (userShapeColour, userText, userTextColour)

const SVG = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
    <rect x="50" y="0" width="200" height="200" fill="${newLogo.shapeColour}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${newLogo.textColour}"> ${newLogo.text} </text>
</svg>
`
return SVG;
};

module.exports = {renderSVG};
