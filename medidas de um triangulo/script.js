var A = parseFloat(prompt("Digite o comprimento do lado A:"));
var B = parseFloat(prompt("Digite o comprimento do lado B:"));
var C = parseFloat(prompt("Digite o comprimento do lado C:"));
if (A < B + C && B < A + C && C < A + B) {
  alert("Os valores formam um triângulo.");
} else {
  alert("Os valores não formam um triângulo.");
}
