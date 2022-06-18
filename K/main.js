const btn = document.getElementById('btn');

function toggleMenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

function btnChange(){
    var i= document.getElementById('btn').style.backgroundImage="url(./IMG/close.png)";
    }


btn.addEventListener('click', toggleMenu);