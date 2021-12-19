
var nomes = ["Ana"];
nomes.pop();                //remove o último índice da lista
nomes.push("Guto");         //insere no último índice da lista
nomes.unshift("Bruno");     //insere no primeiro índice da lista
nomes.shift();              //removw o primeiro índice da lista

nomes.forEach((n) => {
        
        console.log(n);

    });

    //---------------------------------------//

    //array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]]])

    var nomes  = ["Bruno", "Felipe", "Douglas", "Ana"];

    nomes.splice(1, 2, "Zezinho", "Fulano");
    console.log(nomes);

    //-------------------------------------------//

    