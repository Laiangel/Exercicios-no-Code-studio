var anoAtual = (prompt("Digite o ano atual:"));
var anoNascimento = (prompt("Digite o ano de nascimento:"));
var idade = anoAtual - anoNascimento; 
if (idade >= 16) {
alert ("Você poderá votar este ano.");
} else {
alert ("Você não poderá votar este ano.");
}
