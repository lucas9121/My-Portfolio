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
        html.style.background = '#080808'
        body.style.color = 'rgb(255 255 255 / 78%)'
        body.style.background = 'linear-gradient(60deg, rgb(0 0 0 / 60%), rgb(0 0 0 / 80%), rgb(1 18 42 / 70%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 70%), rgb(0 62 129))'
        header.style.background = 'rgb(0 62 129 / 70%)'
        footer.style.background = 'rgb(87 96 109 / 30%)'
        for(let i = 0; i < icons.length; i++){
            icons[i].classList.add('darkmode-icons')
            icons[i].classList.add('transition-effect')
            if(i <= links.length - 1) links[i].classList.add('darkmode-links'); links[i].classList.add('transition-effect')
            if(i <= projects.length - 1) projects[i].style.background = 'rgb(0, 0, 0, 0.7)'
            footer.style.background = 'rgb(87 96 109 / 30%)'
            setTimeout(() => {
                for(let i = 0; i < icons.length; i++){
                    icons[i].classList.remove('transition-effect')
                    if(i <= links.length - 1) links[i].classList.remove('transition-effect')
                }
            }, 2000)
        }
    } else {
        html.style.background = ''
        body.style.color = ''
        body.style.background = ''
        header.style.background = ''
        footer.style.background = ''
        for(let i = 0; i< icons.length; i++){
            icons[i].classList.remove('darkmode-icons')
            icons[i].classList.add('transition-effect')
            if(i <= links.length - 1) links[i].classList.remove('darkmode-links'); links[i].classList.add('transition-effect')
            if(i <= projects.length - 1) projects[i].style.background = ''
        }
        setTimeout(() => {
            for(let i = 0; i < icons.length; i++){
                icons[i].classList.remove('transition-effect')
                if(i <= links.length - 1) links[i].classList.remove('transition-effect')
            }
        }, 2000)
    }
})


