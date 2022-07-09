const cards = document.querySelectorAll('#ani');

const callback = (elements) => {
    elements.forEach((ele) => {
        if (ele.isIntersecting && !ele.target.classList.contains('show')) {
            ele.target.classList.add('show');
        } else {
            ele.target.classList.remove('show');
        }
    });
};

const observer = new IntersectionObserver(callback);
cards.forEach((card) => observer.observe(card));

const btn = document.getElementById('b');

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
