function map(srcArr, cbFn) {
    let arr = []
    // For each el in srcArr, run the cbFn with that el and push in to new arr
    srcArr.forEach(el => arr.push(cbFn(el)))
    return arr
}

function reduce(srcArr, cbFn, startVal) {
    // If startVal is true, set base to startVal, else set to index 0
    let base = (!!startVal) ? startVal : srcArr[0]
    // If startVal is true, set starting index to 0, else start at index 1
    let index = (!!startVal) ? 0 : 1
    // Iterate thru srcArr starting at prev defined index
    for ( ; index < srcArr.length; index++) {
        // Run cbFn on each el in srcArr, passing in prev defined base, and update base var
        base = cbFn(srcArr[index], base)
    }
    // Return updated base var or "total"
    return base
  }