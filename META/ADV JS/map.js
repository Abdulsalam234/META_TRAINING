// The map method
// Finally, there's a very useful map method. 

// This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 



[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

//Advanced USage
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);