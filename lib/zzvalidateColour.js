// Attempt to modularise validating colour without success ... TO DELETE

//---------------------------//
//- Required packages/links -// 
//---------------------------//
const colorKeywords = require ('./colorKeywords.js');

function validateColour(answer) {
    // Pass (true) if answerLowerCase conforms to hexadecimal entry
    var pattern = /^#[0-9A-F]{6}$/i; // Hexadecimal check -  1st character is '#' followed by 6 characters (0-9 and or A-F)
    let answerLowerCase = answer.toLowerCase();
    if (answerLowerCase.match(pattern)) { 
        return true; // Return "true" if answerLowerCase conforms to regex pattern                
    } else {
        let indexOfAnswer = colorKeywords.indexOf(answerLowerCase)            
        if (indexOfAnswer !== -1) {
            return true; // Return "true" if answerLowerCase exists within colorKeyword array
        }
    //Otherwise fail
    return console.log("\n\n *** Please enter a valid color keyword or hexadecimal value ***")
    }    
}

module.exports = {validateColour};