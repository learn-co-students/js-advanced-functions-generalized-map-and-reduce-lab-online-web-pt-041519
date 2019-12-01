// Add your functions here
function map(array, func){
    const newArray = []
    for(const ele of array){
        newArray.push(func(ele))
    }
    return newArray
}

function reduce(array, func, start){
    let value = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    for (; i<array.length; i++){
        value = func(array[i], value)
    }
    return value
}