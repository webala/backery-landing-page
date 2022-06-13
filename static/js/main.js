const navBtns = Array.from(document.getElementsByClassName('nav-btn'))
const collapsible = document.querySelector('.collapsible-nav')

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        collapsible.classList.toggle('show')
    })
})