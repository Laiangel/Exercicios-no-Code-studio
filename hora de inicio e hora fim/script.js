var horaInicio = parseInt(prompt("Digite a hora de início do jogo (0-23):"));
var horaFim = parseInt(prompt("Digite a hora de fim do jogo (0-23):"));
var duracao;
if (horaFim >= horaInicio) {
  duracao = horaFim - horaInicio;
} else {
  duracao = (24 - horaInicio) + horaFim;
}
alert ("A duração do jogo foi de " + duracao + " horas.");
