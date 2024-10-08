var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor:"));
var maior, medio, menor;
if (valor1 > valor2 && valor1 > valor3) {
  maior = valor1;
  if (valor2 > valor3) {
    medio = valor2;
    menor = valor3;
  } else {
    medio = valor3;
    menor = valor2;
  }
} else if (valor2 > valor1 && valor2 > valor3) {
  maior = valor2;
  if (valor1 > valor3) {
    medio = valor1;
    menor = valor3;
  } else {
    medio = valor3;
    menor = valor1;
  }
} else {
  maior = valor3;
  if (valor1 > valor2) {
    medio = valor1;
    menor = valor2;
  } else {
    medio = valor2;
    menor = valor1;
  }
}
alert ("Os valores em ordem crescente são: " + menor + ", " + medio + ", " + maior);
