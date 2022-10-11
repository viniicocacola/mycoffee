const botaoMenu = document.querySelector('.c_botaomenu')
const menu = document.querySelector('.menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo')
})