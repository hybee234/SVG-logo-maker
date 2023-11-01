<a name="readme-top"></a>

# <p style="text-align: center;">Huber's SVG Logo Maker</p>

<p style="text-align: center">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-yellow.svg" > </img>
    </a>
<p>

## Description

This is SVG Logo Maker that is a Node.JS command line application 

This application aims to generate simple logos so that they don't need to be outsourced. 

The application presents a series of questions for the user to responsd to, the responses are used to generate an SVG Logo.

## Table of contents

- <a href="#user-story">User Story<a>
- <a href="#user-acceptance-criteria">User Acceptance Criteria<a>
- [Installation](#installation)
- [Usage](#usage)
- <a href="#video-screenshots">Video and Screenshots<a>
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- <a href="#technologies-used">Technologies Used<a>
- [Questions](#questions)

## User Story <a ID="user-story"></a>

This application was developed with this user story in mind:

```
AS a freelance web developer

I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Acceptance Criteria <a ID="user-acceptance-criteria"></a>

### This application was developed with the below User acceptance criteria:

```
GIVEN a command-line application that accepts user input

WHEN I am prompted for text
THEN I can enter up to three characters

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

```
### Additional requirements:
```
- Develop tests to validate rendering of shapes (circle, square, triangle)
- Produce a walkthrough video demonstrating functionality of the application and tests
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Video and Screenshots <a ID = "video-screenshots"></a>

Watch this video to learn more about the application

<a href="https://drive.google.com/file/d/1CQPkWc-zCFDpUQK3k08EP4xWxqfxaRvM/view"> Video - "How to: Huber's SVG Logo Maker" </a>

Screenshot 1: Questions in the command line interface:

![Alt text](./assets/images/screenshot1.png)

Screenshot 2: Snippet of a Readme file genearated by the application

![Alt text](./assets/images/screenshot2.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

This application has the following dependencies
* Clone or Fork the repository so that you have a version available locally
* <a href="https://nodejs.org/en">Node.js</a>
* <a href="https://www.npmjs.com/package/inquirer">Inquirer</a>
* <a href="https://jestjs.io/">Jest testing framework</a>

After creating a local copy of the application, ensure you have Node.js installed, check if you have it installed by running the below command in the terminal (this will tell you what version you have installed)

```
node --v
```
Once Node.js is installed, run the below below command in the terminal to install dependancies (ensuring you are in the root folder)

```
npm install 
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Execute the application in the command line interface. (CLI) Open then CLI, navigate to the root folder of this application and run command: 

``` 
node index.js
```
The SVG Logo Maker will present a series of questions for you to respond to and, based on your answers, will produce a `Slogo.svg` file within the `output` folder

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application can be used in conjunction with licensing covered in  <b>MIT Lcensee</b>

(Click on the badge for details of the license)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

To contribute to this application, please reach out to me via my contact details below

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

Test scripts have been developed to validate the SVG Output from Circle.js, Square.js and Triangle.js.

Run the below command in CLI to initiate testing via Jest

```
npm run test
```

### Applications Testing

* Validate that when you run ``` node index.js ``` in CLI that you are presented with a series of questions to answer
* Validate that when responding to shape colour and text colour in keyword format, that the application checks to ensure the reponse matches supported colours <a href="https://www.w3.org/TR/SVG11/types.html#ColorKeywords">Link here </a>
* Validate that when responding to shape colour and text colour in hexadecimal format, that the application checks to ensure the response is in format #CCCCCC (where C can be any character from A-F and digit from 0-9. Note that there must be 6 characters following the '#')
* Validate that the responding to the text to appear on the logo, that there is a 3 character limit.
* Validate that when the questions have all been answered, that a `logo.svg` file is generated in the `output` subfolder

* Validate that when running 'jest' tests, that the tests all successfully pass

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies used <a ID="technologies-used"></a>

* Javascript
* Node.js
* Node Package Manager (NPM)
* Inquirer
* File System Package
* Jest test framework

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Questions

- Visit my GitHub page: <a href="https://github.com/hybee234"> hybee234 </a>
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

