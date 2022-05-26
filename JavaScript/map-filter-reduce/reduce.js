function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    });
}


const numeros = [1, 2, 3, 4];

console.log("A soma dos numeros é: " + somaNumeros(numeros));
