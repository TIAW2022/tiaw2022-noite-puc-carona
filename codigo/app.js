function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ 
                        
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
    let strNome = document.getElementById ('completename').value;
    let strSenha = document.getElementById ('password').value;
    let strEmail = document.getElementById('email').value;
    let strNascimento = document.getElementById('datanascimento').value;
    let strGenero = document.querySelector('input[name="gender"]:checked').value;

    

        
        
    
    let novoContato = {
        nome: strNome,
        genero: strGenero,
        email: strEmail,
        nascimento: strNascimento,
        senha: strSenha
    };
    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

  
}



// Configura os botões

document.getElementById ('btn_submit').addEventListener ('click', incluirContato);
