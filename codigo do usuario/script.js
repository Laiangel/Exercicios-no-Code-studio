var codigoUsuario = parseInt(prompt("Digite o código de usuário:"));
if (codigoUsuario !== 1234) {
  alert ("Usuário inválido!");
} else {
  var senha = parseInt(prompt("Digite a senha:"));
  if (senha !== 9999) {
    alert("Senha incorreta");
  } else {
    alert ("Acesso permitido");
  }
}
