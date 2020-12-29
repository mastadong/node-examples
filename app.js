const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
}

function solveRectangle(length, width){
    console.log(`Solving for rectangle with dimensions: ${length}, ${width}`);

    if(length <= 0 || width <= 0){
        console.log(`No negative or zero dimensions are allowed.  You provided: ${length}, ${width}`);
    } else {
        console.log(`Area is: ${rect.area(length, width)}`);
        console.log(`Perimeter is: ${rect.perimeter(length, width)}`);
    }
}

//Test calls
solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(5, -3);
