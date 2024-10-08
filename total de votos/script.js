var totalEleitores = prompt("Digite o número total de eleitores do município:");
var votosBrancos = prompt("Digite o número de votos brancos:");
var votosNulos = prompt("Digite o número de votos nulos:");
var votosValidos = prompt("Digite o número de votos válidos:");
var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;
alert ("Percentual de votos brancos: " + percentualBrancos.toFixed(2));
alert ("Percentual de votos nulos: " + percentualNulos.toFixed(2));
alert ("Percentual de votos válidos: " + percentualValidos.toFixed(2));


