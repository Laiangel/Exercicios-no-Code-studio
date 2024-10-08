var nome = (prompt("Digite o nome:"));
var sexo = (prompt("Digite o sexo (M ou F):"));
var altura = (parseFloat(prompt("Digite a altura (em metros):")));
var pesoIdeal;
if (sexo === 'M') {
pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === 'F') {
  pesoIdeal = (62.1 * altura) - 44.7;
} else {
  alert("Sexo inválido.");
}

if (pesoIdeal !== undefined) {
  alert("O peso ideal de " + nome + " é: " + pesoIdeal.toFixed)
}
