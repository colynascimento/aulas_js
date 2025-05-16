document.addEventListener('DOMContentLoaded', () => {

    const dado = document.getElementById('dado');
    const botao = document.getElementById('botao-enviar');
    const avaliacao = document.getElementById('avaliacao');

    botao.addEventListener('click', () => {

        const valor = dado.value
        
        if (valor === 'true' || valor === 'false') {
            avaliacao.textContent = 'Tipo de dado: booleano';
        } else if (!isNaN(parseFloat(valor)) && valor !== '') {
            avaliacao.textContent = 'Tipo de dado: número (int ou float)';
        } else if (valor === '') {
            avaliacao.textContent = 'Campo vazio!';
        } else {
            avaliacao.textContent = 'Tipo de dado: string';
        }
    });
});