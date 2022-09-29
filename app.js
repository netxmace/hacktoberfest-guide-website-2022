const menuBtn = document.querySelector('.fa')
const hamburger = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-close')
const nav = document.querySelector('#navbar')

hamburger.addEventListener('click', (e) => {
    nav.classList.toggle('show')
    if (nav.classList.contains('show')) {
        hamburger.classList.toggle('hide-bars')
        close.classList.toggle('hide-close')
    }
})


close.addEventListener('click', (e) => {
    nav.classList.toggle('show')
    if (!nav.classList.contains('show')) {
        hamburger.classList.toggle('hide-bars')
        close.classList.toggle('hide-close')
    }
})