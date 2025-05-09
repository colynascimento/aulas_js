document.addEventListener('DOMContentLoaded', () => {
    const entrada_1 = document.getElementById('numero-1');
    const entrada_2 = document.getElementById('numero-2');
    const resultado = document.getElementById('resultado');

    document.querySelectorAll('button').forEach(operacao => {
        operacao.addEventListener('click', (event) => {
            const numero_1 = parseInt(entrada_1.value);
            const numero_2 = parseInt(entrada_2.value);

            const operacaoId = event.currentTarget.id; 

            switch (operacaoId) {
                case 'btnSoma':
                    let resultadoSoma = numero_1 + numero_2;
                    resultado.textContent = `${numero_1} + ${numero_2} = ${resultadoSoma}`;
                    break;
                case 'btnSubtracao':
                    let resultadoSubtracao = numero_1 - numero_2;
                    resultado.textContent = `${numero_1} - ${numero_2} = ${resultadoSubtracao}`;
                    break;
                case 'btnMultiplicacao':
                    let resultadoMultiplicacao = numero_1 * numero_2;
                    resultado.textContent = `${numero_1} × ${numero_2} = ${resultadoMultiplicacao}`;
                    break;
                case 'btnDivisao':
                    let resultadoDivisao = numero_1 / numero_2;
                    resultado.textContent = `${numero_1} ÷ ${numero_2} = ${resultadoDivisao}`;
                    break;
                default:
                    resultado.textContent = 'Tente novamente!';
                    break;
            };

        });
    });
});