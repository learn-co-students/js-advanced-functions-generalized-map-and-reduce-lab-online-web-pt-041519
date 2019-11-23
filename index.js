// Add your functions here

function map(array, func){
    let newArr = [];
    for (let el of array){
        newArr.push(func(el));
    };
    return newArr;
};

function reduce(array, func, startingValue){
    let total = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1
  
    for (let el of array) {
        total = func(array[i], total)
    }
  
    return total;
  }