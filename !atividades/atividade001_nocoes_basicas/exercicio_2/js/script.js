document.addEventListener('DOMContentLoaded', () => {
    const numeroRecebido = document.getElementById('numeroRecebido');
    const botao = document.getElementById('btnVerificar');
    
    botao.addEventListener('click', () => {
        const numero = parseInt(numeroRecebido.value);
    
        if (numero > 0) {
            alert(`O número ${numero} é positivo!`);
        } else if (numero < 0) {
            alert(`O número ${numero} é negativo!`);
        } else {
            alert (`O número ${numero} é neutro.`);
        };
     });
});