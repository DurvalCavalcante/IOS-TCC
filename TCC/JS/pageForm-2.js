document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

function cartao() {
    document.getElementById('container').style.display = "flex";
    document.getElementById('container').style.justifyContent = "center"
}


function generateDonate() {
    document.querySelector('#donate').style.display = "block";
}

function generataIMG() {
    document.querySelector('#qr-image2').style.display = "block";
    document.querySelector('#img').style.display = "block";
    document.querySelector('#qr-image').style.display = "none";

    var foto = document.querySelector('#img')
    foto.src = "/TCC/IMG/Obrigado_por_doar.png";

    var qr = document.getElementById('time');
    setTimeout(() => {
        qr.style.display = "none";
    }, 20000);
}


function generateQR() {
    document.querySelector('#qr-image').style.display = "flex";
    document.querySelector('#doa').style.display = "block";
    document.querySelector('#timeout').style.display = "flex";


}


function cartao() {
    document.getElementById('container').style.display = "flex";
    document.getElementById('container').style.justifyContent = "center"

    var ctn = document.getElementById('container');
    setTimeout(() => {
        ctn.style.display = "none";
    }, 60000);
}

function obrigado() {
    alert("Obrigado por doar!");
    console.log("Obrigado");
    return
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