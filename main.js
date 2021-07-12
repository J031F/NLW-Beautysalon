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

/* testimonial swipper corrosel */
const swipper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  display: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links`,
  { interval: 100 }
)
