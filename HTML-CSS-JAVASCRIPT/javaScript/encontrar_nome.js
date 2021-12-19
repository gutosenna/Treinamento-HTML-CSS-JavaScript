//Encontrar um nome na lista

var nomes = ["Bruno", "Felipe", "Douglas", "Ana"];

var busca = "Ana";
var indice = -1;

for(i = 0; i < nomes.length; i++) {
    if(nomes[i] == busca) {
        indice = i;
        break;
    }
}
console.log("Encontrei o " + busca + " em: " + indice);

//-----------------------------------------//

var nomes = ["Bruno", "Felipe", "Douglas", "Ana"];

var busca = "Ana";
var indice = nomes.indexOf(busca);

console.log("Encontrei o " + busca + " em: " + indice);