// Attempt to modularise validating colour without success ... TO DELETE


function testColourAnswer(userColour) {
    async (userColour) => {
        // Pass (true) if userShapeColour conforms to hexadecimal entry
        var pattern = /^#[0-9A-F]{6}$/i; // Hexadecimal check -  1st character is '#' followed by 6 characters (0-9 and or A-F)
        let answerLowercase = userColour.toLowerCase();

        if (answerLowercase.match(pattern)) { 
            return true; // Return "true" if answerLowerCase conforms to regex pattern                
        } else {
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) !== -1) {                    
                    console.log("true - keywords")
                    return true; // Return "true" if user answerLowerCase can be found in colorKeywords array
                }
            }
        }
        //Otherwise fail
        return console.log("\n Please enter a valid color keyword or hexadecimal value")
    }
}

module.exports = {testColourAnswer};