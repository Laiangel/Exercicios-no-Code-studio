let valor = parseFloat(prompt("Digite o valor da prestação"))
let taxa = parseFloat(prompt("Digite a taxa de juros (%)"))
let tempo = parseInt(prompt("Digite o tempo de atraso (em meses)"))
let prestacao = valor + (valor * taxa / 100) * tempo;
alert("O valor da prestação em atraso é: " + prestacao);