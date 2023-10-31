function renderSVG(userShapeColour, userText, userTextColour) {

    const Shape = require ('./Shape.js');

    class Circle extends Shape {
    constructor (shapeColour, text, textColour) {
        super (shapeColour, text, textColour)
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour
    };
}

const newLogo = new Circle (userShapeColour, userText, userTextColour)

const SVG = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">    
    <circle cx="150" cy="150" r="140" fill="${newLogo.shapeColour}" />
    <text x="150" y="170" font-size="70" text-anchor="middle" fill="${newLogo.textColour}"> ${newLogo.text} </text>
</svg>`
return SVG;
};

module.exports = {renderSVG};
