AOS.init();

// Menu Hambúrguer

const btn = document.getElementById("btn");

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

// Animaçaõ dos cards de preço

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.className === 'btn-detalhes') {
            document.querySelector('.card-inf').classList.add('abrir')
        } else if (btn.className === 'btn-adquirir') {
            document.querySelector('.card-inf').classList.remove('abrir')
        }
    })
})