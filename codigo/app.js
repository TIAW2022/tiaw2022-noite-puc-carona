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
    

        
        
    
    let novoContato = {
        nome: strNome,
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
/*function leDados(){
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if(strDados){
        objDados = JSON.parse (strDados);
    }
    else{
        '[]';
    }

    return objDados;
}

function salvaDados(dados){

    localStorage.setItem('db', JSON.stringify(dados));

}

function incluirDados(){
    let objDados = leDados();

    let strNome = document.getElementById('completename').value;
    let strNascimento = document.getElementById('compldatanascimentoetename').value;
    let strEmail = document.getElementById('email').value;
    let strCpf = document.getElementById('cpf').value;
    let strCelular = document.getElementById('celular').value;
    let strNumeroPessoa = document.getElementById('numeropessoa').value;
    let strCnh = document.getElementById('cnh').value;
    let strPlaca = document.getElementById('placa').value;
    let strSenha = document.getElementById('password').value;

    let novoUsuario = {
        usertype: strUsertype,
        nome: strNome,
        nascimento: strNascimento,
        email: strEmail,
        cpf: strCpf,
        celular: strCelular,
        numeroPessoa: strNumeroPessoa,
        cnh: strCnh,
        placa: strPlaca,
        senha: strSenha
        
    };

    objDados.usuarios.push (novoUsuario);
    salvaDados (objDados);


}

document.getElementById('btn_submit').addEventListener('click', incluirDados );*/


/*function cadastrar(){
    let objDados = JSON.parse(localStorage.getItem('objDados') || '[]');
    objDados.push(
        {
        usertype: usertype.value,
        nome: completename.value,
        nascimento: datanascimento.value,
        email: email.value,
        cpf: cpf.value,
        celular: celular.value,
        numeroPessoa: numeropessoa.value,
        cnh: cnh.value,
        placa: placa.value,
        senha: senha.value
        }
    );

    localStorage.setItem('objDados', JSON.stringify(objDados));
}*/