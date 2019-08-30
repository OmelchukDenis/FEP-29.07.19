function clone(obj) {
    const clonedObj = {};
    for(let i in obj) {
        if(obj[i] != null &&  typeof(obj[i])=="object")
            clonedObj[i] = clone(obj[i]);
        else
            clonedObj[i] = obj[i];
    }
    return clonedObj;
}