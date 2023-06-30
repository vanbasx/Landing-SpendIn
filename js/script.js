const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
        burger.classList.toggle('_lock')
    })
}