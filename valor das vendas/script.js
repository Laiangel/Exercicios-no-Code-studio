var salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
var valorVendas = parseFloat(prompt("Digite o valor das vendas efetuadas:"));
var comissao = 0;
if (valorVendas <= 1500) {
  comissao = valorVendas * 0.03;
} else {
  comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05);
}
var salarioTotal = salarioFixo + comissao;
alert ("O salário total é: R$ " + salarioTotal.toFixed(2));
