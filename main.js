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
