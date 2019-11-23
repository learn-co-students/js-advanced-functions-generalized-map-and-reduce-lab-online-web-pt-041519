// Add your functions here
function map(array = [], theFunction) {
    let newArray = []

    for(let i = 0; i < array.length; i++) {
        let value = theFunction(array[i])
        newArray.push(value)
    }

    return newArray
}

function reduce(array, theFunction, startingPoint = 0) {
    let result = startingPoint || array[0]
    let counter = startingPoint == 0 ? 1 : 0

    for(let i = counter; i < array.length; i++) {
        result = theFunction(array[i], result)
    }
 
    return result
}
