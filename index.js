// Add your functions here

function map(srcArray, fn){
    let newArray = []
    for(let i = 0; i < srcArray.length; i++){
        newArray.push(fn(srcArray[i]))
    }
    return newArray
}

function reduce(srcArray, fn, start = 0){
    let total = start ? start : srcArray[0]
    let i = start ? 0 : 1
    for(; i < srcArray.length; i++){
        total = fn(srcArray[i], total)
    }
    return total

}