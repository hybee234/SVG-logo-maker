const circle = require ('../Circle.js')

describe ("Test Circle", ()=> {
    describe("when user provides input (circle, circle colour, text and text colour", ()=>{
        it ("should render the logo as desired", ()=>{
            //Arrange
            const shapeColour = "blue"
            const text = "BTW"
            const textColour = "orange"
            const output = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto">
    <circle cx="150" cy="150" r="140" fill="blue"/>
    <text x="150" y="170" font-size="70" text-anchor="middle" fill="orange"> BTW </text>
</svg>
`
            //Act
            const shape = circle.renderSVG(shapeColour, text, textColour);

            //Assert
            expect(shape).toEqual(output)
        })
    })
})


