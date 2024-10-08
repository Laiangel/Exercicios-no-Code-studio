let tempo = parseFloat (prompt("Digite o tempo gasto na viagem em horas"))
let velocidade = parseFloat (prompt("Digite a velocidade média em km")) 
let consumoPorLitro = 12
distancia = tempo * velocidade
litrosUsados = distancia / consumoPorLitro
alert("velocidade media:"+ velocidade +"tempo gasto na viagem"+ tempo +"distância percorrida"+ distancia + "quantidade de litros" + litrosUsados)