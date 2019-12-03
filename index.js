
function map(array, callBack) {
    let r = [];
    for (const ea of array) { r.push(callBack(ea)) }
    return r;
}

function reduce(array, callBack, startingPoint = undefined) {
    function checkNum(element) { return typeof element === "number" }
    let allNums = array.every(checkNum);
    let r = allNums ? startingPoint || 0 : true;

    for (const ea of array) { r = callBack(r, ea); }
    return r;
}