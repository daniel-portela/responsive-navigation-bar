const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () => {
   navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
   navMenu.classList.remove('show-menu')
})

const search = document.getElementById('search'),
   searchBtn = document.getElementById('search-btn'),
   searchClose = document.getElementById('search-close')

searchBtn.addEventListener('click', () => {
   search.classList.add('show-search')
})

searchClose.addEventListener('click', () => {
   search.classList.remove('show-search')
})

const login = document.getElementById('login'),
   loginBtn = document.getElementById('login-btn'),
   loginClose = document.getElementById('login-close')

loginBtn.addEventListener('click', () => {
   login.classList.add('show-login')
})

loginClose.addEventListener('click', () => {
   login.classList.remove('show-login')
})
