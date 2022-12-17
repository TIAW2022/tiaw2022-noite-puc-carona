  let login = {                              
    value:"true",                         
    email:`artur@`,      
    nome:`Artur `,
    placa:`lobomau`,
  };
sessionStorage.setItem("login", JSON.stringify(login));
let loginSTR = sessionStorage.getItem("login");
let loginOBJ = JSON.parse(loginSTR);

let loginFakeSTR = sessionStorage.getItem("loginFake");
let loginFakeOBJ = JSON.parse(loginFakeSTR);

var message = new Object();

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
        document.querySelector(".name").innerHTML = loginOBJ.nome;
        document.querySelector(".about").innerHTML = loginOBJ.placa;
      }
      if (loginOBJ.email != allmsg.email) {
        divChat += `<p class="message other-user_message">${allmsg.conteudo}</p>`
          document.querySelector(".name").innerHTML = loginFakeOBJ.nome;
          document.querySelector(".about").innerHTML = loginFakeOBJ.placa;
      }
    }

  document.getElementById('chat-conteudoMensagens').innerHTML = divChat;
}

document.querySelector(".click").addEventListener("click", (event) => { //escuta o envio e armazena o valor
  event.preventDefault();
    message.email = (login.email);
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
    value: "false",
    email: "",
  };
    sessionStorage.setItem("login", JSON.stringify(login));   //limpa dados de login

  let permissao = {
    value: "false"
  };
    sessionStorage.setItem("permissao", JSON.stringify(permissao));   //limpa dados de permissao

  localStorage.setItem("messages", JSON.stringify(""));  //limpa dados de chat

    window.location.href = "./index.html";
}

function verificaLogin() {
  let permissaoSTR = sessionStorage.getItem("permissao");
  let permissao = JSON.parse(permissaoSTR); 

  let loginSTR = sessionStorage.getItem("login"); 
  let loginOBJ = JSON.parse(loginSTR);

  if (loginOBJ.value != "true") { //verifica se a pessao está logada.
    console.log("Não há usuario logado.")
    alert("Usuario não tem permissão para acessar essa pagina...");
    window.location.href = "./login.html";
  }

  if (permissao.value == "true") {  //verifica se a pessoa pediu carona
    console.log("usuario pediu carona.") 
  } else if (permissao.value == "false") {
    console.log("Usuario não pediu carona.") 
    alert("Você precisa buscar uma carona primeiro...");
    window.location.href = "./carona.html";
  }
}