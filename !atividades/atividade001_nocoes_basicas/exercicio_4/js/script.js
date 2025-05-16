document.addEventListener('DOMContentLoaded', () => {

    const botaoVermelho = document.getElementById('btn-vermelho');
    const botaoVerde = document.getElementById('btn-verde');
    const botaoAzul = document.getElementById('btn-azul');
    const quadrado = document.getElementById('quadrado')

    document.querySelectorAll('button').forEach(botao => {
        botao.addEventListener('click', () => {

            if (botao === botaoVermelho) {
                quadrado.style.backgroundColor = "red";
            } else if (botao === botaoVerde) {
                quadrado.style.backgroundColor = "green";
            } else if (botao === botaoAzul) {
                quadrado.style.backgroundColor = "blue";
            };

        });
    });
});