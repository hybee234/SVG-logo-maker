const triangle = require ('../Triangle.js')

describe ("Test triangle", ()=> {
    describe("when user provides input (triangle, triangle colour, text and text colour", ()=>{
        it ("should render the logo as desired", ()=>{
            //Arrange
            const shapeColour = "indigo"
            const text = "WWW"
            const textColour = "lavender"
            const output = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
    <polygon points="150,0 0,200 300,200" fill="indigo"/>
    <text x="150" y="165" font-size="60" text-anchor="middle" fill="lavender"> WWW </text>
</svg>
`
            //Act
            const shape = triangle.renderSVG(shapeColour, text, textColour);
            //Assert
            expect(shape).toEqual(output)
        })
    })
})


