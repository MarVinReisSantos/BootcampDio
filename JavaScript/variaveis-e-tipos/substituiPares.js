let array = [1, 3, 4, 6, 80, 33, 23, 90];

function substitui(array){
    for(let i = 0; i<array.length; i++){
        if((array[i] != 0) && ((array[i] % 2) === 0)){
            array[i] = 0;
        }
    }
    return array;
}

function verifica(array){
    if(array.length == 0) return -1;
    
    return true;
}

verifica(array) == true ? console.log(substitui(array)) : console.log("-1");



