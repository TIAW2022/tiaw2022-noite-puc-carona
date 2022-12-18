let loginSTR = sessionStorage.getItem("login");
let loginOBJ = JSON.parse(loginSTR);

var message = new Object();
let nomeOutro;
let placaOutro;
let emailOutro;

const myKeyValue = window.location.search;
const urlParams = new URLSearchParams(myKeyValue);
var id = urlParams.get('nome');
console.log(id)

pesquisaUsuario(id);
function pesquisaUsuario(id) {
  let lista = JSON.parse(localStorage.getItem("listaUser")); //Esta linha pega todos os usuários que estão no localstorage
  for (let i = 1; i < lista.length; i++) {
    const usuario = lista[i]; //Essa linha manda para "usuário" todos os dados da pessoa cadastrada na linha 0, depois na linha 1, e assim por diante (nome, cep e etc).
    if (usuario.nomeCad == id) {
      nomeOutro = usuario.nomeCad;
      placaOutro = usuario.placaCad;
      emailOutro = usuario.emailCad;
      console.log(nomeOutro); document.querySelector(".name").innerHTML = nomeOutro;
      console.log(placaOutro); document.querySelector(".about").innerHTML = placaOutro;
      console.log(emailOutro);
    }
  }

}


function salvaMensagens(message) {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function mostraMensagens() {  // Pega mensagens do storage
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  let divChat = '';
  for (let i = 0; i < messages.length; i++) {
    let allmsg = messages[i];
    if (loginOBJ.email == allmsg.email) {
      divChat += `<p class="message user_message">${allmsg.conteudo}</p>`

    }
    if (loginOBJ.email == emailOutro) {
      divChat += `<p class="message other-user_message">${allmsg.conteudo}</p>`
    }
  }

  document.getElementById('chat-conteudoMensagens').innerHTML = divChat;
}

document.querySelector(".click").addEventListener("click", (event) => { //escuta o envio e armazena o valor
  event.preventDefault();
  message.email = (loginOBJ.email);
  message.conteudo = document.querySelector(".input-chat").value;
  if (message.conteudo == "") {
    message.conteudo = "👋😃"
  }
  window.location.reload(); //recarrega a pagina pra mostrar a mensagem enviada;
  salvaMensagens(message);
});

if (loginOBJ.value == "true") {
  mostraMensagens(); //chama a function apenas se tiver logado
}

function logout() {
  alert("Deslogado com sucesso...");
  let login = {                              
    value:"false",                         
    email:``,      
    nome:``,
    placa:``,
};
  sessionStorage.setItem("login", JSON.stringify(login));   //limpa dados de login

  localStorage.setItem("messages", JSON.stringify(""));  //limpa dados de chat

  window.location.href = "./index.html";
}

function verificaLogin() {
  let loginSTR = sessionStorage.getItem("login");
  let loginOBJ = JSON.parse(loginSTR);

  if (loginOBJ.value != "true") { //verifica se a pessao está logada.
    console.log("Não há usuario logado.")
    alert("Usuario não tem permissão para acessar essa pagina...");
    window.location.href = "./login.html";
  }

}

if (nomeOutro == undefined) {
  document.querySelector(".name").innerHTML = "";
  document.querySelector(".about").innerHTML = "";

  let aviso = `<p class="message user_message">Funcionalidade original</p><p class="message other-user_message">Infelizmente não pode ser implementada pela impossibilidade de utilizar um cartão para criar conta na API</p><p class="message user_message">Para testar o site selecione algum usuário</p><p class="message user_message"> na pagina de carona</p><p class="message other-user_message">👍😃</p>`

  document.getElementById('chat-conteudoMensagens').innerHTML = aviso;

}