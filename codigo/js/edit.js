localStorage.setItem("key_da_propriedade","Valor armazenado");


let lista = JSON.parse(localStorage.getItem("listaUser")); //Esta linha pega todos os usuários que estão no localstorage
for (let index = 0; index < lista.length; index++) {
  let i = 0;
  const usuario = lista[index]; //Essa linha manda para "usuário" todos os dados da pessoa cadastrada na linha 0, depois na linha 1, e assim por diante (nome, cep e etc).

  const nomes = lista[i];

  var nome = document.getElementById('Nome');
  var email = document.getElementById('email');
  var telefone = document.getElementById('telefone');
  var senha = document.getElementById('senha');
  var endereço = document.getElementById('endereço');



  nomes.innerHTML = nome; //Essa linha irá mostrar só o nome da pessoa da linha 0, depois da linha 1...
  //}

}


function msg() {
  alert("Alteração realizada com sucesso!");
}
