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

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* testimonial swipper corrosel */
const swipper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
  #contact .text, #contact .links
  footer .brand, footer .social`,
  { interval: 100 }
)

// back-to-top button
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 740) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu Ativo */
const sections = document.querySelectorAll('main section[id]')
function activeMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}

/* when scroll */
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activeMenu()
})
