
const form = document.getElementById('formularioCadastro');
  form.addEventListener("submit", capturar);
function capturar(capturarEvento){
  const inputNomePessoa = document.getElementById('nomePessoa');
  const inputIdadePessoa = document.getElementById('idadePessoa');
  const inputProfissaoPessoa = document.getElementById('profissaoPessoa');
  const inputEmailPessoa = document.getElementById('emailPessoa');
  const inputTelefonePessoa = document.getElementById('telefonePessoa');
  const inputPreenchimentoPessoa = document.getElementById('dataPreenchimento');

  const valorNome = document.getElementById('valorNome');
  const valorIdade = document.getElementById('valorIdade');
  const valorProfissao = document.getElementById('valorProfissao');
  const valorEmail = document.getElementById('valorEmail');
  const valorTelefone = document.getElementById('valorTelefone');
  const valorDataPreenchimento = document.getElementById('valorDataPreenchimento');
  

  valorNome.innerHTML = inputNomePessoa.value;
  valorIdade.innerHTML = inputIdadePessoa.value;
  valorProfissao.innerHTML = inputProfissaoPessoa.value;
  valorEmail.innerHTML = inputEmailPessoa.value;
  valorTelefone.innerHTML = inputTelefonePessoa.value;
  valorDataPreenchimento.innerHTML = inputPreenchimentoPessoa.value;
  

  
  capturarEvento.preventDefault()
}