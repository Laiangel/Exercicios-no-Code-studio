var numeroMacas = prompt("Digite o número de maçãs compradas:");
var custoPorMaca;
if (numeroMacas < 12) {
    custoPorMaca = 1.30; 
} else {
    custoPorMaca = 1.00; 
}
var custoTotal = numeroMacas * custoPorMaca;
alert("O custo total da compra é: R$ " + custoTotal.toFixed(2));
