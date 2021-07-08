const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

toggle.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
})

const links = document.querySelectorAll('nav ul li a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
)
// mudar header de acordo com o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
const logo = document.querySelector('#header nav .logo')

window.addEventListener('scroll', () => {
  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
})
