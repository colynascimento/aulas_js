// ============================================================
// FUNÇÕES DE CÁLCULO (Arrow Functions)
// ============================================================
const dobrar = numero => numero * 2;
const triplicar = numero => numero * 3;

// ============================================================
// FUNÇÕES DE EXIBIÇÃO DE RESULTADOS
// ============================================================
function mostrarResultado(operacao, texto) {
    const input = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    const numero = parseFloat(input.value);

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido';
        resultado.style.color = 'red';
        return;
    };

    const valor = operacao(numero); // dobrar ou triplicar

    resultado.textContent = `${texto} de ${numero} é: ${valor}`;
    resultado.style.color = 'black';
};

// ============================================================
// EVENT LISTENERS - INTERAÇÕES DO USUÁRIO
// ============================================================

document.getElementById('dobro').addEventListener('click', function() {
    mostrarResultado(dobrar, 'O dobro');
});

document.getElementById('triplo').addEventListener('click', function() {
    mostrarResultado(triplicar, 'O triplo');
});

document.getElementById('numero').addEventListener('keypress', function(enter) {
    if (enter.key === 'Enter') {
        // Por padrão, calcula o dobro quando Enter é pressionado
        mostrarResultado(dobrar, 'O dobro');
    };
});