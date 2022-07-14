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

// Animaçaõ dos cards de preço Card 1

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.className === 'btnDetalhes-1') {
            document.querySelector('.cardInfo-1').classList.add('abrir-1')
        } else if (btn.className === 'btnAdquirir-1') {
            document.querySelector('.cardInfo-1').classList.remove('abrir-1')
        }
    })
})

// Animaçaõ dos cards de preço Card 2

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.className === 'btnDetalhes-2') {
            document.querySelector('.cardInfo-2').classList.add('abrir-2')
        } else if (btn.className === 'btnAdquirir-2') {
            document.querySelector('.cardInfo-2').classList.remove('abrir-2')
        }
    })
})

// Animaçaõ dos cards de preço Card 3

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.className === 'btnDetalhes-3') {
            document.querySelector('.cardInfo-3').classList.add('abrir-3')
        } else if (btn.className === 'btnAdquirir-3') {
            document.querySelector('.cardInfo-3').classList.remove('abrir-3')
        }
    })
})

// Animaçaõ dos cards de preço Card 4

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.className === 'btnDetalhes-4') {
            document.querySelector('.cardInfo-4').classList.add('abrir-4')
        } else if (btn.className === 'btnAdquirir-4') {
            document.querySelector('.cardInfo-4').classList.remove('abrir-4')
        }
    })
})