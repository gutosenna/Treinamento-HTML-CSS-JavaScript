var nomes = [];
var quantConvidados = Number(prompt("Digite o número de convidados"));

for(i = 0; i < quantConvidados; i++) {
    nomes[i] = prompt("Digite o nome do(a) convidado(a) " + i);
}

console.log(nomes);

//-----------------------------------------------------------------------//

var nomes = ["Guto", "Isaque", "Alex"];

console.log(nomes.length);

for(i = 0; i < nomes.length; i++) {
    console.log(nomes[]);    
}

//-------------------------------------------------------------------------//


var nomes = ["Guto", "Isaque", "Alex"];

nomes.forEach(function(nome, indice) {
    console.log(indice + " - " + nomes);
});

