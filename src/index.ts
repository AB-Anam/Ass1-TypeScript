 function formatString(input: string, toUpper?: boolean):string{
    if(toUpper === undefined){
        return input.toUpperCase();
    }
    else if(toUpper === true){
        return input.toUpperCase();
    }
    else{
        return input.toLowerCase();
    }
}


type book = {title : string; rating : number}[]


function filterByRating(items : book) : book{
    let obj = items.filter(item => item.rating >= 4.0);
    return obj;
}

function concatenateArrays<T>(...arrays: T[][]) : T[]{
 const concatenatedArray : T[] = [];
 for(const array of arrays) {
    concatenatedArray.push(...array);
 }
 return concatenatedArray;
}