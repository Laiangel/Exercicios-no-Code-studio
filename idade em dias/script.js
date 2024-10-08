var anos = (prompt("Digite sua idade em anos:"));
var meses = (prompt("Digite sua idade em meses:"));
var dias = (prompt("Digite sua idade em dias:"));
var anosNumericos = Number(anos);
var mesesNumericos = Number(meses);
var diasNumericos = Number(dias);
var idadeEmDias = (anosNumericos * 365) + (mesesNumericos * 30) + diasNumericos;
alert("Sua idade expressa em dias é: " + idadeEmDias);
