var custoFabrica = prompt("Digite o custo de fábrica do carro:");
var custoDistribuidor = custoFabrica * 0.28;
var custoImpostos = custoFabrica * 0.45;
var custoFinal = parseFloat(custoFabrica) + custoDistribuidor + custoImpostos;
alert ("O custo final ao consumidor é: R$ " + custoFinal.toFixed(2));
