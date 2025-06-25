function verificarParOuImpar(numero){
    let numero = parseInt(numero)
    if (numero % 2 == 0) {
        return `O número ${numero} é par.`
    } else {
        return `O número ${numero} é ímpar.`
    }
};

// function inserirResultadoVerificacao(){

// };

document.addEventListener('DOMContentLoaded', () => {
    const numeroRecebido = document.getElementById('numero-verificar');
    const botaoVerificar = document.getElementById('btn-verificar');
    const resultadoVerificacao = document.getElementById('resultado-verificacao');

    botaoVerificar.addEventListener('click', () => {verificarParOuImpar(numeroRecebido)});
});