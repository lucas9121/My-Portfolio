const html = document.querySelector('html')
const body = document.querySelector('body')
const header = document.querySelector('header')
const links = document.querySelectorAll('.Link')
const input = document.querySelector('input')
const projects = document.querySelectorAll('.game-description')
const footer = document.querySelector('footer')
const icons = document.querySelectorAll('.icon')


input.addEventListener('click', () => {
    console.log(links.length)
    console.log(projects)
    if(input.checked){
        html.style.background = 'black'
        body.style.color = 'white'
        body.style.background = 'linear-gradient(60deg, rgb(0 0 0 / 60%), rgb(0 0 0 / 80%), rgb(1 18 42 / 70%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 70%), rgb(0 62 129))'
        header.style.background = 'rgb(0 62 129 / 70%)'
        for(let i = 0; i< icons.length; i++){
            icons[i].style.color = 'white'
            if(i > links.length - 1 && projects.length - 1) return
            console.log(i)
            links[i].style.color = 'white'
            if(i > projects.length - 1) return
            projects[i].style.background = 'rgb(0, 0, 0, 0.7)'
            console.log(i)
        }
        footer.style.background = 'rgb(87 96 109 / 30%)'
    } else {
        html.style.background = ''
        body.style.color = ''
        body.style.background = ''
        header.style.background = ''
        for(let i = 0; i< icons.length; i++){
            links[i].style.color = ''
            projects[i].style.background = ''
            icons[i].style.color = ''
        }
        footer.style.background = ''
    }
})

