/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
   const header = document.getElementById('header')
   if(header) {
      this.scrollY >= 50 ? header.classList.add('scroll-header') 
                         : header.classList.remove('scroll-header')
   }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   if(scrollUp) {
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
   }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const setActiveLink = () => {
   try {
      const links = document.querySelectorAll('.nav__link')
      const path = window.location.pathname.split('/').pop() || 'index.html'
      
      links.forEach(link => {
         const href = link.getAttribute('href') || ''
         const file = href.split('/').pop()
         
         if(file === path) {
            link.classList.add('active-link')
         } else {
            link.classList.remove('active-link')
         }
      })
   } catch (e) {
      console.error('Error setting active link:', e)
   }
}

// Set active link on page load
setActiveLink()

/*=============== SCROLL REVEAL ANIMATION ===============*/
if(typeof ScrollReveal !== 'undefined'){
   try {
      const sr = ScrollReveal({
         distance: '60px',
         duration: 1000,
         delay: 200,
         reset: false,
         origin: 'bottom'
      })
      
      sr.reveal('.home__content, .cta__center', { origin: 'top' })
      sr.reveal('.home__images', { origin: 'bottom', delay: 400 })
      sr.reveal('.services__card', { interval: 150 })
      sr.reveal('.about__item', { interval: 100 })
      sr.reveal('.cta__contact, .cta__button', { origin: 'bottom', delay: 300 })
      sr.reveal('.footer__content', { origin: 'bottom' })
      
   } catch(e) {
      console.error('ScrollReveal error:', e)
   }
}