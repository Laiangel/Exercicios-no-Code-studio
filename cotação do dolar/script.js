var cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));
var quantidadeDolares = parseFloat(prompt("Digite a quantidade de dólares que você possui:"));
var valorEmReais = cotacaoDolar * quantidadeDolares;
alert("O valor em reais é: R$ " + valorEmReais.toFixed(2));