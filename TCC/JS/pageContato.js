const inputs = document.querySelectorAll(".input");

function addFocus() {
    let adicionadoClass = this.parentNode;
    adicionadoClass.classList.add("focus");
}

function removendoFunc() {
    let removerClass = this.parentNode;
    if (this.value == "") {
        removerClass.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addFocus);
    input.addEventListener("blur", removendoFunc);
})

// Botão Enviar

const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const textaera = document.getElementById('textarea');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    checkout();
})

function checkout() {
    const nomeValue = nome.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const textareaValue = textaera.value;

    if (nomeValue === '') {
        alert("-O Nome é Obrigatório!")
    } else if (emailValue === '') {
        alert("-O E-mail é Obrigatório!")
    } else if (telefoneValue === '') {
        alert("-O Telefone é Obrigatório!")
    } else if (textareaValue === '') {
        alert("-A Mensagem é Obrigatória!")
    } else {
        alert("- Obrigado por entrar em contato!")
    }
}


