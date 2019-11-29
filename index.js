function map(sourceArray, sourceFunction) {
    let newArray = []
    for (var a of sourceArray) {
        newArray.push(sourceFunction(a))
    }
    return newArray
}