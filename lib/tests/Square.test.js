const square = require ('../Square.js')

describe ("Test Square", ()=> {
    describe("when user provides input (square, sqaure colour, text and text colour", ()=>{
        it ("should render the logo as desired", ()=>{
            //Arrange
            const shapeColour = "purple"
            const text = "123"
            const textColour = "yellow"
            const output = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
    <rect x="50" y="0" width="200" height="200" fill="purple"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow"> 123 </text>
</svg>
`   
            //Act
            const shape = square.renderSVG(shapeColour, text, textColour);
            //Assert
            expect(shape).toEqual(output)
        })
    })
})


