// Add your functions here
function map(sourceArray, sourceFunction) {
  let arr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    arr.push(sourceFunction(sourceArray[i]));
  }
  return arr;
}

function reduce(sourceArray, sourceFunction, startingValue=0) {
  let r = (!!startingValue) ? startingValue : sourceArray[0]
  let i = (!!startingValue) ? 0 : 1
  
  for (; i < sourceArray.length; i++) {
    r = sourceFunction(sourceArray[i], r)
  }
  
  return r;
}
