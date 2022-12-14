

//passando valores de login p/ teste
let login = {                              
    value:"false",                         
    email:`artur.gmail@`,     
};
sessionStorage.setItem("login", JSON.stringify(login));  



    if(isLogged()) {
        let text =`<a class="nav-link" aria-current="page" href="#" onclick="loginOrlogout()">Logout</a>`
        document.getElementById('loginID').innerHTML = text;
    } else {
        let text =`<a class="nav-link" aria-current="page" href="#" onclick="loginOrlogout()">Login</a>`
        document.getElementById('loginID').innerHTML = text;
    }



/* Verificando url e passando valor para header, assim o chat só podera ser acessado pelo gps*/
var url_atual = window.location.href;
    var result = url_atual.indexOf("index") > -1;
    if (result) {
        let text =`<a class="nav-link" aria-current="page" href="#" >Chat</a>`
        document.getElementById('gpsOrChatID').innerHTML = text;
            let chat = document.querySelector('#gpsOrChatID');
                chat.addEventListener('click', (event)=> {
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
                    value:"false",                              
                    email:``,                                  
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
    
    if(loginOBJ.value=="true") {
        console.log("Há usuario logado")
        return true;
    } else {
        //console.log("Não há usuario logado")
        return false;
    }
}
