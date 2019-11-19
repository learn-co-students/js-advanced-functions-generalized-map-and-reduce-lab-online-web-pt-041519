// Return array from input array and function
function map(sourceArray, fxn) {
  let newArr = []
  sourceArray.forEach(el => newArr.push(fxn(el)))
  return newArr
}

// Return value from input array, function, and optional starting value
function reduce(sourceArray, fxn, startingValue) {
  // Set starting value to first array item if not set
  let total = (!!startingValue) ? startingValue : sourceArray[0]

  // Set starting index. If startingValue exists, set index to 0
  let index = (!!startingValue) ? 0 : 1

  for (; index < sourceArray.length; index++) {
    total = fxn(sourceArray[index], total)
  }
  
  return total
}