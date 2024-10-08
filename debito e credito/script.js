var numeroConta = (prompt("Digite o número da conta do cliente:"));
var saldo = parseFloat(prompt("Digite o saldo da conta:"));
var debito = parseFloat(prompt("Digite o valor do débito:"));
var credito = parseFloat(prompt("Digite o valor do crédito:"));
var saldoAtual = saldo - debito + credito;
alert ("Número da conta: " + numeroConta);
alert ("Saldo atual: R$ " + saldoAtual.toFixed(2));
if (saldoAtual >= 0) {
  alert ("Saldo Positivo");
} else {
  alert ("Saldo Negativo");
}
