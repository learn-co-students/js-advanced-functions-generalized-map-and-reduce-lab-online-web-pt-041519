// generalized map expression
function map(sourceArray, sourceFunction) {
    // create new array
    let newArray = []
    // run every el in source array
    for (var a of sourceArray) {
        // through the source function
        // add result to new array
        newArray.push(sourceFunction(a))
    }
    // return new array
    return newArray
}

// generalized reduce expression
function reduce(sourceArray, sourceFunction, optionalValue) {
    // set total value to arg passed in else to first el in source array
    let total = (!!optionalValue) ? optionalValue : sourceArray[0]
    // set index value to 0 if optional value received else to 
    let i = (!!optionalValue) ? 0 : 1
    // as long as there are el in the source array
    for (; i < sourceArray.length; i++) {
        // run the source fnc with the passed in el + starting total, update total value
        total = sourceFunction(sourceArray[i], total)
    }
    // return total value
    return total
}