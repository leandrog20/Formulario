var ativado = document.querySelector('.login')
var desativado = document.querySelector('.signup')
var h1Signup = document.querySelector('.signup h1')
var h1Login = document.querySelector('.login h1')

ativado.addEventListener('click', () => {
    ativado.style.top = '15%'
    ativado.style.transition = 'all 0.6s'
    h1Signup.style.color = 'rgba(255, 255, 255, 0.548)'
    h1Login.style.color = 'rgba(0, 0, 0, 0.578)'
    desativado.style.cursor = 'pointer'
    ativado.style.cursor = 'auto'
});

desativado.addEventListener('click', () => {
    ativado.style.top = '87%'
    h1Signup.style.color = 'white'
    h1Login.style.color = 'rgb(174, 168, 168)'
    ativado.style.cursor = 'pointer'
    desativado.style.cursor = 'auto'
});

