// Your code goes here

const atags = document.querySelectorAll('a')

const h1 = document.querySelector('h1')

const imgs = document.querySelectorAll('img')

const h2 = document.querySelectorAll('h2')

const p = document.querySelectorAll('p')

const sections = document.querySelectorAll('section')



document.addEventListener('keypress', function(event) {
    h1.style.color = 'blue'
})

Array.from(atags).forEach(function(atag) {
    atag.addEventListener('click', function(event) {
        atag.style.color = 'gray'
    })
})

Array.from(sections).forEach(function(sec) {
    sec.addEventListener('mouseenter', function(event) {
        sec.style.background = 'tan'
    })
    sec.addEventListener('mouseleave', function(event) {
        sec.style.background = 'white'
    })
})

Array.from(sections).forEach(function(sec) {
    sec.addEventListener('mousedown', function(event) {
        sec.style.color = 'white'
    })
    sec.addEventListener('mouseup', function(event) {
        sec.style.color = 'black'
    })
})

Array.from(imgs).forEach(function(sec) {
    sec.addEventListener('dblclick', function(event) {
        sec.style.visibility = 'hidden'
    })
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift') {
        document.body.style.color = 'green'
    }
})

document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
        document.body.style.color = 'black'
    }
})

document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
        document.body.style.color = 'black'
    }
})

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
})