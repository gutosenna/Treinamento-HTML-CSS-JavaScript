

var v1 = Number(prompt("Digite o primeiro valor"));
var x = prompt("Digite o operador +, -, *, /");
var v2 = Number(prompt("Digite o segundo valor"));


    if (x === "+") {
        function soma(x, y) {
            return x + y;
        }
        
        alert("Resultado: " + soma(v1, v2));
    } else if (x === "-") {
        function sub(x, y) {
            return x - y;
        }
        
        alert("Resultado: " + sub(v1, v2));
    } else if (x === "*") {
        function mult(x, y) {
            return x * y;
        }
        
        alert("Resultado: " + mult(v1, v2));
    } else if (x === "/") {
        function div(x, y) {
            return x / y;
        }
        
        alert("Resultado: " + div(v1, v2));
    } else {
        alert("Erro de cálculo");
    }

