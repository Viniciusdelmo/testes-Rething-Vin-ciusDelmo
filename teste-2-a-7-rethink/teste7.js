const pessoas = [
  { name: "Fabiana Araújo", age:33},
  { name: "Gabriel Gomes", age:25},
  { name: "Fernando Henrique", age:17},
  { name: "Ana Luiza", age:2},
  { name: "Geralda do Nascimento", age:93},
  { name: "Miguel Souza", age:70},
  { name: "Antonio Miguel", age:69},
]

function retornaMediaIdade(pessoas) {
  const mediaIdade = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age;
  }, 0);
  return `A média da idade das pessoas é ${(
    mediaIdade / pessoas.length
  ).toFixed(4)} anos`;
}
console.log(retornaMediaIdade(pessoas));