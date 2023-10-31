// Called by index.js if the user selects shape "triangle"
// Creates a triangle object and returns SVG code for a triangle with user selected paramters
// Index.js to receive and write to file

// Triangle class has parent class Shape

function renderSVG(userShapeColour, userText, userTextColour) {

    const Shape = require ('./Shape.js');

    class Triangle extends Shape {
    constructor (shapeColour, text, textColour) {
        super (shapeColour, text, textColour)
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour
    };
}

const newLogo = new Triangle (userShapeColour, userText, userTextColour)

const SVG = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">    
    <polygon points="150,10 10,290 290,290" fill="${newLogo.shapeColour}" />
    <text x="150" y="275" font-size="70" text-anchor="middle" fill="${newLogo.textColour}"> ${newLogo.text} </text>
</svg>
`
return SVG;
};

module.exports = {renderSVG};
