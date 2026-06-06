function enviarFormulario(evento){
    evento.preventDefault();

    const email = document.getElementById("email").value

    const senha = document.getElementById("senha").value

    if (email == "vipz@gmail.com" && senha == "12345") {
        alert("Login feito com sucesso.")
    } else {
        alert("Digite o email ou senha correto")
    }


    titulo.textContent = "Formulário enviado."
}

//colocando o dom em prática

//let titulo = document.getElementById("titulo")

//titulo.style.backgroundColor = "blue"

//titulo.textContent = "texto javascript"