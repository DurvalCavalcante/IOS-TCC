AOS.init();

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

formulario.addEventListener("submit", validar);

function validar(event) {
    event.preventDefault();

    if (nome.value == '') {
        alert("- Preencher o campo Nome!");
        nome.focus();
        return false;
    }
    if (email.value == '') {
        alert("- Preencher o campo E-mail!");
        email.focus();
        return false;
    }
    if (telefone.value == '') {
        alert("- Preencher o campo Telefone!");
        telefone.focus();
        return false;
    }
    if (textaera.value == '') {
        alert("- Preencher o campo Mensagem!");
        textaera.focus();
        return false;
    }
    return true;
}

// Menu Hambúrguer

const btn = document.getElementById("b");

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btn.addEventListener('click', toggleMenu);

function ChangeBG() {
    document.getElementById('btn').classList.contains('alt')
        ? document.getElementById('btn').classList.remove('alt')
        : document.getElementById('btn').classList.add('alt');
}
