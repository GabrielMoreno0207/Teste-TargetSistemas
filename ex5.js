let str = "Me contrata Target!";

// Função para inverter a string
function inverterString(s) {
  let resultado = "";
  for (let i = s.length - 1; i >= 0; i--) {
    resultado += s[i];
  }
  return resultado;
}

// Chamando a função e exibindo o resultado
let stringInvertida = inverterString(str);
console.log(stringInvertida);
