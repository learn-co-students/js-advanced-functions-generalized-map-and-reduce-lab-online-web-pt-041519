// Add your functions here
function map(arr, fn){
    let newArr = []
    for(let i=0; i < arr.length; i++){
        let el = arr[i]
        newArr.push(fn(el))
    }
    return newArr
}

function reduce(arr, fn, start){
    let total = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
    for(; i < arr.length; i++){
        total = fn(arr[i], total)
    }
    return total
}