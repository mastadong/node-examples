// module.exports = (x, y, callback) => {

//     if(x <= 0 || y <= 0){
//         //make the callback function expect an error object as its first argument.  Yes, that's what she said.. I don't know what she means either.
//         //As soon as this error condition is detected, this callback will run.
//         callback(new Error(`No negative or zero dimensions are allowed.  You provided: ${x}, ${y}`));
//     } else {
//         setTimeout(() => 
//             callback(null, {
//                 perimeter: () => 2 * (x + y),
//                 area: () => x * y
//             }),
//             2000
//         );
//     }
// }


//ES6 Import-Export
export function calculateRectangle(x, y, callback){

    if(x <= 0 || y <= 0){
        //make the callback function expect an error object as its first argument.  Yes, that's what she said.. I don't know what she means either.
        //As soon as this error condition is detected, this callback will run.
        callback(new Error(`No negative or zero dimensions are allowed.  You provided: ${x}, ${y}`));
    } else {
        setTimeout(() => 
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
}

