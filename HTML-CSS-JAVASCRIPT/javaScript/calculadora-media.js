var v1 = Number(prompt("Digite o primeiro valor"));
var v2 = Number(prompt("Digite o segundo valor"));
var v3 = Number(prompt("Digite o terceiro valor"));
    
    function media(x, y, z) {
            return (x + y + z)/3;
        }
 console.log(media(v1, v2, v3));      


 //-------------------------//
var numeros = [];

while(true) {
 var numero = prompt("Digite um número ou S para sair");

    if (numero == 'S' || numero == 's') {
     break;
    } else {
        numeros.push(Number(numero));
    }
}

var soma = 0;

    for (i = 0;i < numeros.length;i++) {
        soma += numeros[i];
    }
    
var resultado = soma / numeros.length;
    console.log(resultado);

 

