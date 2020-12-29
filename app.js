//CommonJS - uses the 'require' statement below.
//const rect = require('./rectangle');

//ES6 Import-Export (requires modification in package.json or insertion of script lines to specify that modules are being used.)
import { calculateRectangle as rect } from './rectangle.js';

function solveRectangle(length, width){
    console.log(`Solving for rectangle with dimensions: ${length}, ${width}`);

    rect(length, width, (err, rectangle) => {

        if(err){
            console.log('ERROR: ', err.message);
        } else {
            console.log(`Area is: ${rectangle.area()}`);
            console.log(`Perimeter is: ${rectangle.perimeter()}`);
        }
    });
}

//Test calls
solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(5, -3);
