//---------------------------//
//- Required packages/links -// 
//---------------------------//
const colorKeywords = require ('./colorKeywords.js');

//-------------//
//- Questions -//
//-------------//

// Questions constant pulled into index.js for use by Inquirer to generate questions

const questions = [
    {
        type: 'list',
        name: 'userShape',
        message: 'Shape: Please select a logo shape',
        choices: [
            {name: 'Circle', value: 'circle'},
            {name: 'Square', value: 'square'},
            {name: 'Triangle', value: 'triangle'},
        ],
    },
    {
        type: 'input',
        name: 'userShapeColour',
        message: 'Shape: What colour do you want your logo to be? (Hexadecimal (#ABC123) or keyword)',
        validate:  (answer) => {
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
            //Otherwise false
            return console.log("\n\n *** Please enter a valid color keyword or hexadecimal value ***")
            }    
        }
    },
    {
        type: 'input',
        name: 'userText',
        message: 'Text: What text do you want to include? (3 characters max)',
        validate: (answer) => {     // Check that response is maximum 3 characters
            if (answer.length <= 3) {
                return true;
            } else {
                console.log("\n\n *** Maximum 3 characters, please try again ***")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userTextColour',
        message: 'Text: What colour do you want your text to be? (Hexadecimal (#ABC123) or keyword)',
        validate:  (answer) => {
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
            //Otherwise false
            return console.log("\n\n *** Please enter a valid color keyword or hexadecimal value ***")
            }    
        }
    },      
]

module.exports = questions