function replaceAll(str, findChar, replaceChar){
    if (findChar.length !== 1 || replaceChar.length !== 1){
        console.warn('wrong arguments');
        return str;
    }

    str = str.replace(findChar, replaceChar);


    if (str.indexOf(findChar) >= 0) {
        str = replaceAll(str, findChar, replaceChar)
    } 

    return str;

    // return str.indexOf(findChar) >= 0 ? 
    //             replaceAll(str, findChar, replaceChar) : 
    //             str;
}

console.log(replaceAll('Hello world', 'l', 'z'));