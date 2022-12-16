
let login = {
  value: "true",
  email: "artur",
};
sessionStorage.setItem("login", JSON.stringify(login));
let loginSTR = sessionStorage.getItem("login");
let loginOBJ = JSON.parse(loginSTR);

var message= new Object();

// This function saves a message to local storage
function saveMessage(message) {
  // Get the existing messages from local storage, or an empty array if there are none
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  // Add the new message to the array of messages
  messages.push(message);

  // Save the updated array of messages to local storage
  localStorage.setItem('messages', JSON.stringify(messages));
}

// This function retrieves the messages from local storage and displays them on the page
function displayMessages() {
  // Get the messages from local storage
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  // Loop through the messages and display them on the page
  let divChat = '';
  for (let i=0; i<messages.length;i++)  {
      let allmsg = messages[i];
      if(login.email == allmsg.email) {
        console.log("TA ENTRANDO")
          divChat += `<p class="message user_message">${allmsg.conteudo}</p>`

      } else  {
        console.log("TA nao")
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

  // Get the message from the form
  message.email =  (login.email);
  message.conteudo = document.querySelector(".input-chat").value;
  if(message.conteudo == "") {
    message.conteudo = "👋😃"
  }
  console.log(message)
  // Save the message
  window.location.reload();
  saveMessage(message);
});

// Display the existing messages when the page loads
if(loginOBJ.value == "true") {
displayMessages();
}

function logout () {
  alert("Deslogado com sucesso...");

  let login = {
    value: "false",
    email: "",
  };
  sessionStorage.setItem("login", JSON.stringify(login));
  let loginSTR = sessionStorage.getItem("login");

  window.location.href = "./index.html";
}

 function verificaLogin() {
  let loginSTR = sessionStorage.getItem("login");
  let loginOBJ = JSON.parse(loginSTR);

  if (loginOBJ.value != "true") {
    console.log("Não há usuario logado.")
    alert("Usuario não tem permissão para acessar essa pagina...");
    window.location.href = "./login.html";
  }
 }