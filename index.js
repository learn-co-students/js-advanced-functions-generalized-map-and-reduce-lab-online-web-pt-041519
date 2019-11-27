// Add your functions here
function map(array, fn) { 
    return array.map(fn)
}

function reduce(arr, fn, start){
    let total = (!!start) ? start : arr[0]
    
    for(let i = (!!start) ? 0 : 1; i < arr.length; i++){
        total = fn(arr[i], total)
    }
    return total
}
