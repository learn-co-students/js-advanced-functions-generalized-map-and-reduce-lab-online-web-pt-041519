function map(arr, func){
    let newArr = []
    arr.forEach(el => newArr.push(func(el)))
    return newArr
}


function reduce(arr, func, start) {
    let total = (!!start) ? start : arr[0]

    for(let i = (!!start) ? 0:1; i <arr.length; i++) {
        total = func(arr[i], total)
    }
    return total
}
