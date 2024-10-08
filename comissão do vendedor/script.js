var numeroCarrosVendidos = (prompt("Digite o número de carros vendidos:"));
var valorTotalVendas = (prompt("Digite o valor total das vendas:"));
var salarioFixo = (prompt("Digite o salário fixo do vendedor:"));
var comissaoPorCarro = prompt("Digite o valor que o vendedor recebe por carro vendido:");
var totalComissao = numeroCarrosVendidos * comissaoPorCarro;
var percentualVendas = valorTotalVendas * 0.05;
var salarioFinal = parseFloat(salarioFixo) + totalComissao + percentualVendas;
alert ("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2));
