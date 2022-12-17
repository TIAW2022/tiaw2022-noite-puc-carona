let login = {
  value: "true",
  email: "artur",
};
sessionStorage.setItem("login", JSON.stringify(login));
let loginSTR = sessionStorage.getItem("login");
let loginOBJ = JSON.parse(loginSTR);



var message= new Object();

function salvaMensagens(message) {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  messages.push(message);

  localStorage.setItem('messages', JSON.stringify(messages));
}

function mostraMensagens() {
  // Pega mensagens do storage
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  let divChat = '';
  for (let i=0; i<messages.length;i++)  {
      let allmsg = messages[i];
      if(login.email == allmsg.email) {
          divChat += `<p class="message user_message">${allmsg.conteudo}</p>`

      } else  {
        divChat += `<p class="message other-user_message">${allmsg.conteudo}</p>`
      }
  }
  document.getElementById('chat-conteudoMensagens').innerHTML = divChat;
  console.log(messages);
  
}

// Listen for form submit events and save the new message when the form is submitted
document.querySelector(".click").addEventListener("click", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  message.email =  (login.email);
  message.conteudo = document.querySelector(".input-chat").value;
  if(message.conteudo == "") {
    message.conteudo = "👋😃"
  }
  console.log(message)
  window.location.reload();
  salvaMensagens(message);
});

// mostra mensagens que existem 
if(loginOBJ.value == "true") {
mostraMensagens();
}

function logout () {
  alert("Deslogado com sucesso...");
//limpa dados de login
  let login = {
    value: "false",
    email: "",
  };
  sessionStorage.setItem("login", JSON.stringify(login));
//limpa dados de permissao
  let permissao = {
    value: "false"
  };
  sessionStorage.setItem("permissao", JSON.stringify(permissao));
//limpa dados de chat
  localStorage.setItem("messages", JSON.stringify(""));


  window.location.href = "./index.html";
}

function verificaLogin() {
  let permissaoSTR = sessionStorage.getItem("permissao");
  let permissao = JSON.parse(permissaoSTR);
  console.log(permissao.value)

  if (permissao.value == "true") {
    console.log("Há usuario logado.") //mostra o chat 
  } else if (permissao.value == "false") {
    console.log("Usuario não escolheu o mapa.") //nao mostra o chat, mas volta pro mapa
    alert("Você precisa buscar uma carona primeiro...");
    window.location.href = "./carona.html";
  }
 }