// Add your functions here
function map(srcArray, func){
  let nArray = []
  for (let i = 0; i < srcArray.length; i++){
    let element = srcArray[i]
    nArray.push(func(element))
  }
  return nArray
}

function reduce(srcArray, callBack, startingPoint){
  let theBase = (!!startingPoint) ? startingPoint : srcArray[0]
  let theIndex = (!!startingPoint) ? 0 : 1
  for (; theIndex < srcArray.length; theIndex++) {
    theBase = callBack(srcArray[theIndex], theBase)
  }
  return theBase
}