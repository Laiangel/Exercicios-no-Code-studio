var horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
var salarioPorHora = parseFloat(prompt("Digite o valor do salário por hora:"));
var horasSemanais = 40;
var semanasNoMes = 4;
var horasTrabalhoMensal = horasSemanais * semanasNoMes;
var salarioTotal;

if (horasTrabalhadas > horasTrabalhoMensal) {
  var horasExtras = horasTrabalhadas - horasTrabalhoMensal;
  var salarioHorasExtras = horasExtras * (salarioPorHora * 1.5);
  salarioTotal = (horasTrabalhoMensal * salarioPorHora) + salarioHorasExtras;
} else {
  salarioTotal = horasTrabalhadas * salarioPorHora;
}

Alert ("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2));
