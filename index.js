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
  //here we delcare our accumulator as `total`.
  //Since `startingPoint` is an optional argument we use a conditional. Just like if else.
  //When a value is passed in, we assign that value to `total`. 
  //When no value is passed in, we assign the value of the element at index 0 in the `srcArray` 
  let total = (!!startingPoint) ? startingPoint : srcArray[0]
  //here we use a conditional again in case `startingPoint` has a value.
  //if it does have a value we start the iteration at index 0 if there is no value we start at index 1,
  //this is because we have already assigned the value of the element at index 0 of the `srcArray` to the `total` variable. 
  for (let i = (!!startingPoint) ? 0 : 1; i < srcArray.length; i++) {
    //here we are assigning the value of the return of the function being passed in to our `callBack` variable. 
    //We are also passing in the values of each element in the `srcArray` and the current value of `total`.
    total = callBack(srcArray[i], total)
  }
  //returning the total after iterating over the array elements. 
  return total
}