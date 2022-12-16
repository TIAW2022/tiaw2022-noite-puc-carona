//passando valores de login p/ teste
let login = {
    value: "false",
    email: "artur",
  };
  sessionStorage.setItem("login", JSON.stringify(login));
  let loginSTR = sessionStorage.getItem("login");
  let loginOBJ = JSON.parse(loginSTR);
  
  var json = {
    length: 0,
    addElem: function addElem(elem) {
        // obj.length é automaticamente incrementado
        // toda vez que um elemento for adicionado.
        [].push.call(this, elem);
    }
  };
  
  // if(json.length == 0) {
  // let temp = sessionStorage.getItem("chatz");
  // json = JSON.parse(temp);
  // }
  
  document.querySelector(".click").addEventListener("click", (e) => {
    let msg = new Object();
  
    e.preventDefault();
    if (document.querySelector(".input-chat").value) { //se tiver algo no input
        msg.email =  (login.email);
        msg.conteudo =  (document.querySelector(".input-chat").value);
  
        json.addElem(msg);
          
        sessionStorage.setItem("chatz", JSON.stringify(json));
        imprimeMensagens ()
    }
  
  });
  function imprimeMensagens () {
    let divChat = '';
    for (let i=0; i<json.length;i++)  {
        let allmsg = json[i];
        if(login.email == allmsg.email) {
          console.log("TA ENTRANDO")
            divChat += `<p class="message user_message">${allmsg.conteudo}</p>`
  
        } else  {
          console.log("TA nao")
          divChat += `<p class="message other-user_message">${allmsg.conteudo}</p>`
        }
    }
    document.getElementById('chat-conteudoMensagens').innerHTML = divChat;
   
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (isLogged()) {
    let text = `<a class="nav-link" aria-current="page" href="#" onclick="loginOrlogout()">Logout</a>`
    document.getElementById('loginID').innerHTML = text;
  } else {
    let text = `<a class="nav-link" aria-current="page" href="#" onclick="loginOrlogout()">Login</a>`
    document.getElementById('loginID').innerHTML = text;
  }
  
  
  
  /* Verificando url e passando valor para header, assim o chat só podera ser acessado pelo gps*/
  var url_atual = window.location.href;
  var result = url_atual.indexOf("index") > -1;
  if (result) {
    let text = `<a class="nav-link" aria-current="page" href="#" >Chat</a>`
    document.getElementById('gpsOrChatID').innerHTML = text;
    let chat = document.querySelector('#gpsOrChatID');
    chat.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'chat.html'
    })
  }
  
  
  
  
  function loginOrlogout() { //apenas quando clica no button
    console.log("Requisição de login/logout")
    if (isLogged()) { // tem usuario logado -> fazer logout, (obj fica vazio) e levar p/ inicio
      console.log("Usuario esta desconectando")
      let loginSTR = sessionStorage.getItem("login");
      let loginOBJ = JSON.parse(loginSTR);
      loginOBJ = {
        value: "false",
        email: ``,
      };
      sessionStorage.setItem("login", JSON.stringify(loginOBJ));
      window.location.href = "/codigo/telaprincipal.html";
  
    } else { // nao tem usuario logado -> levar p/ login
      console.log("Usuario quer fazer login")
      window.location.href = "/codigo/login.html";
    }
  }
  
  function isLogged() {
    console.log("...")
    let loginSTR = sessionStorage.getItem("login");
    let loginOBJ = JSON.parse(loginSTR);
  
    if (loginOBJ.value == "true") {
      console.log("Há usuario logado")
      return true;
    } else {
      //console.log("Não há usuario logado")
      return false;
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*Botão de deslogar do site
  document.querySelector(".navbar-nav").addEventListener("click", (e) => {
   if (e.target.className === "logout") {
     e.preventDefault();
  
     alert("Deslogado com sucesso...");
     sessionStorage.removeItem("usuarioLogado");
     window.location.href = "./index.html";
   }
  });
  
  
  function leUserLogado() {
   let strUsuario = sessionStorage.getItem("usuarioLogado");
  
   if (strUsuario !== null) {
     strUsuario = JSON.parse(strUsuario);
   }
  
   return strUsuario;
  }
  
  
  /*
  * Função que faz a validação, efetua o login do usuário, redireciona o usuário para o seu perfil
  * e salva os dados do usuário logado no session storage
  
  
  function login() {
   let estaLogado = false;
   let usuario = leUsers();
  
   let emailLogin = document.getElementById("email-login").value;
   let senhaLogin = document.getElementById("password-login").value;
   let idUsuario = "";
  
   for (let i = 0; i < usuario.length; i++) {
     if (usuario[i].email === emailLogin && usuario[i].senha === senhaLogin) {
       estaLogado = true;
       idUsuario = usuario[i].id;
       usuarioLogado = usuario[i];
     }
   }
  
   if (estaLogado === false) {
     alert("Usuário e/ou senha incorreto(s).");
   } else if (estaLogado === true) {
     if (usuario[idUsuario - 1].categoria === "aluno" || usuario[idUsuario - 1].categoria === "professor") {
       sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
       alert("Logado com sucesso! Clique em 'OK' para ser redirecionado");
  
       setTimeout(() => {
         window.location.href = "./index.html";
       }, 500);
     }
   }
  }
  
  const logado = document.querySelector("#btn-submit-login");
  
  if (logado) {
   logado.addEventListener("click", (e) => {
     e.preventDefault();
     login();
   });
  }
  
  function checaLogin() {
   let logado = sessionStorage.getItem("usuarioLogado");
   let estaLogado = false;
  
   if (logado !== null) {
     estaLogado = true;
   } else {
     console.log("Não há usuários logados");
   }
  
   return estaLogado;
  }
  
  const uLogado = leUserLogado();
  
  if (!checaLogin()) {
   alert("Você deve estar logado para acessar esta página");
   window.location.href = "./login.html";
  } else if (uLogado.categoria !== "aluno") {
   alert("Você deve ser um aluno registrado para acessar esta página");
   window.location.href = "./index.html";
  }*/
  