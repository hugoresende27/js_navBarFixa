const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log(window.scrollY, nav.offsetHeight)//obter o valor de scroll value em Y

    if (window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('ativo')
    } else {
        nav.classList.remove('ativo')
    }
}