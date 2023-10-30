const Shape = require ('./shape.js');

class Circle extends Shape {
    constructor (shapeColour, text, textColour) {
        super (shapeColour, text, textColour)
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour
    };
}