var nota1 = (prompt("Digite a primeira nota (peso 2):"));
var nota2 = (prompt("Digite a segunda nota (peso 3):"));
var nota3 = (prompt("Digite a terceira nota (peso 5):"));
var mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5);
alert ("A média final do aluno é: " + mediaFinal.toFixed(2));
