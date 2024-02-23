var ativo = document.querySelector('.login')
var desativado = document.querySelector('.signup')


ativo.addEventListener('click', () => {
    ativo.style.top = '15%'
    ativo.style.transition = 'all 0.6s'
});

desativado.addEventListener('click', () => {
    ativo.style.top = '87%'
});

