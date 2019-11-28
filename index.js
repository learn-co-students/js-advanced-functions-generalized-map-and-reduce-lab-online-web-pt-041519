// Add your functions here
 

  function map(src, callback) {
    let newarr = []
    src.forEach(element => {
       let wtf = element
       newarr.push(callback(wtf)) 
    }); 
    return newarr;
  }

 

  function reduce(src, callback, starting){
    let s = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
    for (; i < src.length; i++) {
        s = callback(src[i], s)
      }
  
    // src.forEach(fn => {
    //    s = callback(fn, s) 
    // }); 
    return s;
  }