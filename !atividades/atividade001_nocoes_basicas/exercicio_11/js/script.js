document.addEventListener('DOMContentLoaded', () => {

    const numeroRecebido = document.getElementById('numero-recebido');
    const botaoEnviar = document.getElementById('botao-enviar');
    const tabuada = document.getElementById('tabuada');

    botaoEnviar.addEventListener('click', () => {
        tabuada.textContent = ''

        if (!isNaN(parseFloat(numeroRecebido.value))) {
            if (0 < parseFloat(numeroRecebido.value) <= 10) {
                for (let i = 0; i < 10; i++) {
                    const operacao = document.createElement('p');
                    operacao.textContent = `${numeroRecebido.value} × ${i} = ${numeroRecebido.value * i}`
                    tabuada.appendChild(operacao);
                };
            } else {
                alert('Atenção! Insira apenas números de 1 a 10.')
            };
        } else {
            alert('Resposta inválida! O valor digitado não é um número')
        };
    })
});