// Add your functions here
function map(array, funct) {
    let arr = []
    for(let x = 0; x < array.length; x ++) {
        arr.push(funct(array[x]))
    }
    return arr
}

function reduce(array, funct, value = 0) {
   if(value) {
        var i = value
        var x = 0
   }
   else {
        var i = array[0]
        var x = 1
   }
   for(x; x < array.length; x++){
       i = funct(i, array[x])
   }
   return i
}