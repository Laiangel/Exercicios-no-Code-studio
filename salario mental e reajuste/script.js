var salarioAtual = prompt("Digite o salário mensal atual:");
var percentualReajuste = prompt("Digite o percentual de reajuste:");
var novoSalario = salarioAtual * (1 + (percentualReajuste / 100));
alert("O novo salário é: R$ " + novoSalario.toFixed(2));

