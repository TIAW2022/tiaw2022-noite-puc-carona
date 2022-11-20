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
    let strNome = document.getElementById ('completename').value;
    let strSenha = document.getElementById ('password').value;
    let strEmail = document.getElementById ('email').value;
    let strNascimento = document.getElementById ('datanascimento').value;
    let strCpf = document.getElementById ('cpf').value;
    let strPlaca = document.getElementById ('placa').value;
    let strCelular = document.getElementById ('celular').value;
    let strNumeropessoa = document.getElementById ('numeropessoa').value;
    let strCnh = document.getElementById ('cnh').value;
    let strTipoUsuario = document.querySelector('input[name="q1"]:checked').value;
    let strGenero = document.querySelector('input[name="genero"]:checked').value;


    let novoUsuario = {
        nome: strNome,
        senha: strSenha,
        email: strEmail,
        nascimento: strNascimento,
        cpf: strCpf,
        placa: strPlaca,
        celular: strCelular,
        numeropessoa: strNumeropessoa,
        cnh: strCnh,
        tipoUsuario: strTipoUsuario,
        genero: strGenero
        


    };
    objDados.usuarios.push (novoUsuario);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

  
}


function checkInputs(inputs) {
    var filled = true;
    
    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      }
    
    });
    
    return filled;
    
  }

  var inputs = document.querySelectorAll("input");
  var button = document.querySelector("button");
  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
      if(checkInputs(inputs)) {
        button.disabled = false;
        
      } else {
        button.disabled = true;
      }
    });
  });

// Configura os botões

document.getElementById ('btn_submit').addEventListener ('click', incluirContato);
