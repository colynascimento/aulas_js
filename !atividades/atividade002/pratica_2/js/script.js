document.addEventListener('DOMContentLoaded', () => {

    const fundo = document.querySelectorAll('body');
    const texto = document.getElementById('texto');
    const caixa = document.getElementById('caixa')

    const corFundo = document.getElementById('cor-fundo');
    const corTexto = document.getElementById('cor-texto');
    const corCaixa = document.getElementById('cor-caixa');

    function mudarCor(elemento) {
        
    }

    corFundo.addEventListener('input', () => {fundo.style.color = corFundo.value});
    corTexto.addEventListener('input', () => {fundo.style.color = corTexto.value});
    corCaixa.addEventListener('input', () => {fundo.style.color = corCaixa.value});
});