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
