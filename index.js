const botaoMenu = document.querySelector('.c_botaomenu')
const menu = document.querySelector('.menu')
const iconMenu = document.querySelector('.c_botaomenu')
const iconX = document.querySelector('.iconburger')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo')
})

iconMenu.addEventListener('click', () => {
   iconX.classList.toggle('fa-xmark')
})