const square = require ('../Square.js')

describe ("Test Square", ()=> {
    describe("when user provides input (square, sqaure colour, text and text colour", ()=>{
        it ("should render the logo as desired", ()=>{
            //Arrange
            const shapeColour = "red"
            const text = "123"
            const textColour = "green"
            const output = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto">
    <rect x="10" y="10" width="280" height="280" fill="red" />
    <text x="150" y="170" font-size="70" text-anchor="middle" fill="green"> 123 </text>
</svg>
`   
            //Act
            const shape = square.renderSVG(shapeColour, text, textColour);

            //Assert
            expect(shape).toEqual(output)
        })
    })
})


