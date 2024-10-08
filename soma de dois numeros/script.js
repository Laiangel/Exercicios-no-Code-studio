var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor:"));
var maior, segundoMaior;
if (valor1 > valor2 && valor1 > valor3) {
  maior = valor1;
  segundoMaior = Math.max(valor2, valor3);
} else if (valor2 > valor1 && valor2 > valor3) {
  maior = valor2;
  segundoMaior = Math.max(valor1, valor3);
} else {
  maior = valor3;
  segundoMaior = Math.max(valor1, valor2);
}
var somaDosMaiores = maior + segundoMaior;
alert("A soma dos dois maiores valores é: " + somaDosMaiores);
