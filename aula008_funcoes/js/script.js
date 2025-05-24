document.addEventListener('DOMContentLoaded', () => {

    const botao = document.getElementById('calcular-btn');

    botao.addEventListener('click', () => {

        const input = document.getElementById('ladoInput');
        const lado = parseFloat(input.value);

        // Verifica se o valor é inválido (não é número ou é menor/igual a zero)
        if (isNaN(lado) || lado <= 0) {
            
            mostrarMensagem('Por favor, insira um valor válido maior que zero.');
            return;
        };

        const area = calcularAreaQuadrado(lado);
        mostrarMensagem(`A área do quadrado com lado ${lado} é: ${area}`);
    });
});

function calcularAreaQuadrado(lado) {
    return lado * lado;
};

function mostrarMensagem(texto) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = texto;
};