var cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));
var quantidadeReais = parseFloat(prompt("Digite a quantidade de reais que você possui:"));
var valorEmDolares = quantidadeReais / cotacaoDolar;
alert("O valor em dólares é: $ " + valorEmDolares.toFixed(2));