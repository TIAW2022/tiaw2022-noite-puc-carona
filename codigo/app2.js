function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { usuarios: [ 
                        
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById ('username').value;
    let strSenha = document.getElementById ('password').value;
    let novoUsuario = {
        nome: strNome,
        senha: strSenha
    };
    objDados.usuarios.push (novoUsuario);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

  
}
//listauser = db

let listaUser = [];

let userValid = {
    name: '',
    username: '',
    password: ''
}
listaUser = JSON.parse(localStorage.getItem('db'));
 console.log(listaUser);

listaUser.forEach((item) =>{
    if(username.value == item.email && password.value == item.senha){
        
        userValid = {
            name: item.nome,
            username: item.usuario,
            password: item.senha
        }
    }

})

console.log(userValid);

// Configura os botões

document.getElementById ('btn_submit').addEventListener ('click', incluirContato);