// Shape is a parent class of Circle, Square and Triangle

class Shape {
    constructor(shapeColour, text, textColour) {
        this.shapeColour = shapeColour;
        this.text = text;
        this.textColour = textColour;
    }
};

module.exports = Shape;