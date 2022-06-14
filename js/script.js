const html = document.querySelector('html')
const body = document.querySelector('body')
const header = document.querySelector('header')
const links = document.querySelectorAll('.Link')
const input = document.querySelector('input')
const projects = document.querySelectorAll('.game-description')
const footer = document.querySelector('footer')
const icons = document.querySelectorAll('.icon')


input.addEventListener('click', () => {
    if(input.checked){
        body.style.background = 'linear-gradient(60deg, rgb(0 0 0 / 60%), rgb(0 0 0 / 80%), rgb(1 18 42 / 70%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 70%), rgb(0 62 129))'
        html.style.background = '#080808'
        body.style.color = 'rgb(255 255 255 / 78%)'
        header.style.background = 'rgb(0 62 129 / 70%)'
        footer.style.background = 'rgb(87 96 109 / 30%)'
        console.log(icons)
        for(let i = 0; i < icons.length; i++){
            if(i > 5){
                icons[i].classList.add('darkmode-icons')

            }
            if(i <= links.length - 1) links[i].classList.add('darkmode-links')
            footer.style.background = 'rgb(87 96 109 / 30%)'
        }
    } else {
        body.style.background = ''
        html.style.background = ''
        body.style.color = ''
        header.style.background = ''
        footer.style.background = ''
        for(let i = 0; i< icons.length; i++){
            icons[i].classList.remove('darkmode-icons')
            if(i <= links.length - 1) links[i].classList.remove('darkmode-links')
            if(i <= projects.length - 1) projects[i].style.background = ''
        }
    }
})


