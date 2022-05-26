function recebeNumeros(numero1, numero2){
    var frase = 'Os números ' + numero1 + " e " + numero2;

    numero1 === numero2 ? frase += ' são iguais.' : frase += ' não são iguais.';
    
    frase += ' Sua soma é ' + (numero1+numero2) + ', que é ';

    (numero1+numero2) > 10 ? frase += 'maior que 10 e ' : frase += 'menor que 10 e ';
    (numero1+numero2) > 20 ? frase += 'maior que 20.' : frase += 'menor que 20.';

    return frase;

}

console.log(recebeNumeros(11, 11));
