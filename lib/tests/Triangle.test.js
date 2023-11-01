const triangle = require ('../Triangle.js')

describe ("Test triangle", ()=> {
    describe("when user provides input (triangle, triangle colour, text and text colour", ()=>{
        it ("should render the logo as desired", ()=>{
            //Arrange
            const shapeColour = "pink"
            const text = "ABC"
            const textColour = "darkgreen"
            const output = `
<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto">
    <polygon points="150,10 10,290 290,290" fill="pink"/>
    <text x="150" y="270" font-size="70" text-anchor="middle" fill="darkgreen"> ABC </text>
</svg>
`            
            //Act
            const shape = triangle.renderSVG(shapeColour, text, textColour);

            //Assert
            expect(shape).toEqual(output)
        })
    })
})


