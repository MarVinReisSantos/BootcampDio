let frase = "roma amor";
var marcador = true;
let separaLetras = frase.split("");

/*
Outro metodo de verificação:
string.split("").reverse().join("") == string;
*/
for(var i = 0; i < separaLetras.length/2; i++){

    if(!((separaLetras[i] === separaLetras[(separaLetras.length) - 1 -i]))){
        marcador = false;
        break;
    }
}

marcador == true ? console.log("A frase " + frase + " é um Palindromo!") : console.log("A frase " + frase + " nao é um Palindromo!");