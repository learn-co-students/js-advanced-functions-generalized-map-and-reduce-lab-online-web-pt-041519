// Add your functions here
function map(src, fn) {
    let arr = []
    for (let i=0; i<src.length; i++) {
      let el = src[i]
      arr.push(fn(el))
    }
    return arr
}

function reduce(src, func, start = 0) {
  let total = (!!start) ? start : src[0]

  for (let i = (!!start) ? 0:1; i<src.length; i++) {
    total = func(src[i], total)
  }
  return total
}
